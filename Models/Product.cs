using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace from_blueprint.Models
{
  public class Product
  {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public float Price { get; set; }
    public string Description { get; set; }
    
    public virtual Image Image { get; set; }
    
    public DateTime CreatedDate { get; set; } = DateTime.Now;
  }
}