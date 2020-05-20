using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace from_blueprint.Models
{
  public class Product
  {
    public Product()
    {
      CreatedDate = DateTime.Now;
    }
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Name { get; set; }
    public float Price { get; set; }
    public string Description { get; set; }
    
    public virtual Image Image { get; set; }
    
    public DateTime CreatedDate { get; set; }
  }
}