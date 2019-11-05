using System.ComponentModel.DataAnnotations;
using Astronomy.Domain;

namespace Astronomy.Data.Models
{
    public class DeepSkyEntity: DeepSkyModel
    {
      //Approach: Inherits from DeepSkyModel. Must have key. 
      [Key]
      public int DeepSkyPKey {get; set;}
    }
}