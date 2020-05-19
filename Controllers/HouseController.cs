using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using from_blueprint.Database;
using from_blueprint.Models;
using Microsoft.AspNetCore.Mvc;

namespace from_blueprint.Controllers
{
  public class HouseController: ControllerBase
  {
    private ApplicationContext _db;

    public HouseController(ApplicationContext db)
    {
      _db = db;
    }

    [HttpGet]
    public ActionResult<object> Index(int? id)
    {
      if (id != null)
      {
        try
        {
          return _db.Houses.Single(h => h.Id == id);
        }
        catch
        {
          return NotFound();
        }
      }
      else return _db.Houses.ToList();
    }
  }
}