using System;
using System.ComponentModel.DataAnnotations;

namespace Astronomy.Domain
{
    public class DeepSkyModel
    {
      // [Key]
      // public int DeepSkyPKey { get; set;} //Primary Key in DB

      //Approach: This model indicates derivated classes must have id and brief info. 
      [Required]
      public string NGCID { get; set;} //New General Catalogue ID
      [Required]
      public string DeepSkyInfo {get; set;} //Brief Description about Deep Sky Object
    }
}
