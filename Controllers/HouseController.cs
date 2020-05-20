using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using from_blueprint.Database;
using from_blueprint.Models;
using from_blueprint.Pages;
using Microsoft.AspNetCore.Mvc;

namespace from_blueprint.Controllers
{
  public class HouseController : ControllerBase
  {
    private ApplicationContext _db;

    public HouseController(ApplicationContext db)
    {
      _db = db;
    }

    [HttpGet]
    public ActionResult<object> Index(int[] id)
    {
      if (id.Length == 0) return Ok(_db.Houses.ToList().Select(h => h.ToDto()));
      try
      {
        return Ok(
          id.Length > 1
            ? _db.Houses.Where(h => id.Contains(h.Id)).ToList().Select(h => h.ToDto())
            : _db.Houses.Single(h => h.Id == id[0]).ToDto()
        );
      }
      catch
      {
        return NotFound();
      }
    }

    public ActionResult<IEnumerable<object>> Filter(int limit = 4, string orderBy = "Price", bool descending = true)
    {
      if (descending == false)
      {
        return Ok(_db.Houses.OrderByDescending(h => h.Price).Take(limit).ToList().Select(h=> h.ToDto()));
      }

      return Ok(_db.Houses.OrderBy(h => h.Price).Take(limit).ToList().Select(h=> h.ToDto()));
    }
  }
}