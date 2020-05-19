using from_blueprint.Models;
using Microsoft.EntityFrameworkCore;

namespace from_blueprint.Database
{
  public class ApplicationContext: DbContext
  {
    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
      Database.EnsureCreated();
    }
    
    public DbSet<Product> Products { get; set; }
    public DbSet<House> Houses { get; set; }
    public DbSet<Image> Images { get; set; }
  }
}