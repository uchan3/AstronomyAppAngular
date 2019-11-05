using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Astronomy.Data.Models;
using Astronomy.Domain;

namespace Astronomy.Data.Repository
{
  public class AstroRepository : IAstronomy
  {
    //TODO: Add validation. Use threading tasks for performance. 
    private AstronomyDbContext _db;

    public AstroRepository(AstronomyDbContext DBContext){
      _db = DBContext;
    }
    public bool CreateObject(DeepSkyEntity SkyInstance)
    {
      _db.DeepSkyList.Add(SkyInstance);
      _db.SaveChanges();
      return true; //Assumming that the information is entered correctly. 
    }

    public bool DeleteObject(string NGCID)
    {
      DeepSkyEntity DeleteObject = _db.DeepSkyList.FirstOrDefault(id => id.NGCID == NGCID);
      _db.DeepSkyList.Remove(DeleteObject);
      _db.SaveChanges();
      return true; 
    }

    public List<DeepSkyModel> ReadAll()
    {
      //TODO: Refactor with async and await. 
      //var ListObjects = _db.DeepSkyList.ToAsyncEnumerable().ToList(); 
      var ListObjects = _db.DeepSkyList.Cast<DeepSkyModel>().ToList(); //Cast from Entity to Model. 
      return ListObjects;
    }

    public DeepSkyModel ReadObject(string NGCID)
    {
      DeepSkyEntity TargetObject = _db.DeepSkyList.FirstOrDefault( id => id.NGCID == NGCID);
      return TargetObject;
    }

    public bool UpdateObject(DeepSkyEntity SkyUpdate)
    {
      //TODO: async & await
      //Add validation. 
      var UpdateID = _db.DeepSkyList.FirstOrDefault( id => id.NGCID == SkyUpdate.NGCID); //Return the value. 
      UpdateID.DeepSkyInfo = SkyUpdate.DeepSkyInfo; //For now, just update the information. 
      //UpdateID.Equals(SkyUpdate);
      _db.Update(UpdateID);
      _db.SaveChanges();
      return true;
    }
  }
}