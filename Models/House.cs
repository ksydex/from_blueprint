using System;

namespace from_blueprint.Models
{
  public class House : Product
  {
    private const int DaysAsNew = 5;
    public float Area { get; set; }
    public int Floors { get; set; }


    public object ToDto()
    {
      var dateBeforeNew = DateTime.Now.AddDays(-1*DaysAsNew);
      
      return new
      {
        Id, Description, Area, Floors, Image = Image?.Path, Price, IsNew = CreatedDate > dateBeforeNew
      };
    }
  }
}