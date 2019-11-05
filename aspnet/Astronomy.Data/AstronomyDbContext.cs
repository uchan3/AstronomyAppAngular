using System;
using Astronomy.Data.Models;
using Astronomy.Domain;
using Microsoft.EntityFrameworkCore;

namespace Astronomy.Data
{
    public class AstronomyDbContext: DbContext
    {
      public DbSet<DeepSkyEntity> DeepSkyList {get; set;}

      public AstronomyDbContext() {} //Create an instance. 

      //public AstronomyDbContext(DbContextOptions<AstronomyDbContext> options) : base(options) {}
      protected override void OnConfiguring(DbContextOptionsBuilder builder)
      {
        builder.UseSqlServer("server=localhost;initial catalog=AstronomyDB;user id=sa;password=Password12345;");
      }

      protected override void OnModelCreating(ModelBuilder builder)
      {
       builder.Entity<DeepSkyEntity>().HasKey(ds => ds.DeepSkyPKey);
      }
    }
}
