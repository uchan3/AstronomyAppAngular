using System.Collections.Generic;
using System.Threading.Tasks;
using Astronomy.Data.Models;
using Astronomy.Domain;

namespace Astronomy.Data.Repository
{
    public interface IAstronomy
    {
        bool CreateObject(DeepSkyEntity SkyInstance); //Return a true/false. 
        List<DeepSkyModel> ReadAll(); //Get all results. We use model instead of entity since we do not care abt DB Key.
        DeepSkyModel ReadObject(string NGCID); //Get result by name. 
        bool UpdateObject(DeepSkyEntity SkyUpdate); //Update result based on name. 
        bool DeleteObject(string NGCID); //Delete object based on name. 
    }
}