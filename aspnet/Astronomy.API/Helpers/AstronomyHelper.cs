using System.Collections.Generic;
using System.Threading.Tasks;
using Astronomy.Data;
using Astronomy.Data.Models;
using Astronomy.Data.Repository;
using Astronomy.Domain;

namespace Astronomy.API.Helpers
{
    public class AstronomyHelper
    {
      #region Singleton Pattern
      private static AstronomyHelper _helper;
      private static IAstronomy _repository;

      private AstronomyHelper() {} //Prevent instantiation of helper. 
      public static AstronomyHelper Instance()
      {
        if (_helper is null && _repository is null)
        {
          _helper = new AstronomyHelper(); //Create new helper. 
          _repository = new AstroRepository(new AstronomyDbContext()); //Inject repository. 
        }
        return _helper;
      }
      #endregion

      //Methods
      #region Methods
      public bool CreateObject(DeepSkyModel CreateSky)
      { 
        //Debugging
        DeepSkyEntity CreateSEntity = new DeepSkyEntity();
        //Map from model to the entity. 
        CreateSEntity.NGCID = CreateSky.NGCID;
        CreateSEntity.DeepSkyInfo = CreateSky.DeepSkyInfo;
        return _repository.CreateObject(CreateSEntity);
        //return _repository.CreateObject(SkyInstance as DeepSkyEntity);
      }
      public DeepSkyModel ReadObject(string NGCID)
      {
        return _repository.ReadObject(NGCID);
      }     

      public List<DeepSkyModel> ReadAll() 
      {
        return _repository.ReadAll();
      }

      public bool UpdateObject(DeepSkyModel UpdateSky)
      {
        DeepSkyEntity UpdateSEntity = new DeepSkyEntity(); //Seems to be particular about instantiating stuff...
        UpdateSEntity.NGCID = UpdateSky.NGCID;
        UpdateSEntity.DeepSkyInfo = UpdateSky.DeepSkyInfo;
        return _repository.UpdateObject(UpdateSEntity);
      }

      public bool DeleteObject(string NGCID)
      {
        return _repository.DeleteObject(NGCID);
      }
      
      #endregion 
    }
}