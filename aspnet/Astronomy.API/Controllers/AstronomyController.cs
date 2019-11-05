using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Astronomy.API.Helpers;
using Astronomy.API.Models;
using Astronomy.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Astronomy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AstronomyController : ControllerBase
    {
        private AstronomyHelper _helper = Helpers.AstronomyHelper.Instance(); //Create instance of helper. 

        // GET all values
        [HttpGet]
        [Route("getcatalogue")]
        public IActionResult Get()
        {
            var DeepSkyList = _helper.ReadAll();
            if (DeepSkyList.Count() ==0)
            {
              return NotFound("There are currently no objects to display.");
            }
            else
            {
              return Ok(DeepSkyList);
            }
            //return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet]
        [Route("getobject")]
        public IActionResult Get([FromQuery] string NGCID)
        {
            var DeepSkyObject = _helper.ReadObject(NGCID);
            if (DeepSkyObject == null) 
            {
              return NotFound("This object does not currently exist in the catalogue\n" + 
              "Please check the object is typed correctly or consider adding one in!");
            }
            else 
            {
              return Ok(DeepSkyObject);
            }
            //return "value";
        }

        // POST api/values
        [HttpPost]
        [Route("postobject")]
        public IActionResult Post([FromBody] DeepSkyModel NewSkyInstance) 
        //Post the model, not the entity here. 
        {
          if (ModelState.IsValid && _helper.CreateObject(NewSkyInstance)==true)
          {
            return Ok("The object has been successfully added.");
          }
          else
          {
            return NotFound("There was an error adding the object.");
          }
        }

        // PUT api/values/5
        [HttpPut]
        [Route("putobject")]
        public IActionResult Put([FromBody] DeepSkyModel UpdateSkyInstance)
        {
          if(_helper.UpdateObject(UpdateSkyInstance))
          {
            return Ok("The object has been successfully updated.");
          }
          else
          {
            return NotFound("Unable to update the object.");
          }
        }

        // DELETE api/values/5
        [HttpDelete]
        [Route("deleteobject")]
        public IActionResult Delete([FromQuery] string NGCID)
        {
          if(_helper.DeleteObject(NGCID))
          {
            return Ok("The object has been successfully deleted.");
          }
          else
          {
            return NotFound("Error with deleting the object");
          }
        }
    }
}
