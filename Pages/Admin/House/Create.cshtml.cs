using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using from_blueprint.Database;
using from_blueprint.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace from_blueprint.Pages_Admin_House
{
  public class CreateModel : PageModel
  {
    private readonly from_blueprint.Database.ApplicationContext _context;
    private IWebHostEnvironment _appEnvironment;

    public CreateModel(from_blueprint.Database.ApplicationContext context, IWebHostEnvironment appEnvironment)
    {
      _context = context;
      _appEnvironment = appEnvironment;
    }

    public IActionResult OnGet()
    {
      return Page();
    }

    [BindProperty] public House House { get; set; }
    // To protect from overposting attacks, enable the specific properties you want to bind to, for
    // more details, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync(IFormFile imageFile)
    {
      if (!ModelState.IsValid)
      {
        return Page();
      }

      var image = await UploadImage(imageFile);
      House.Image = image;
      _context.Houses.Add(House);
      await _context.SaveChangesAsync();

      return RedirectToPage("./Index");
    }

    private async Task<Image> UploadImage(IFormFile imageFile)
    {
      // путь к папке Files
      var path = "/Static/" + imageFile.FileName;
      // сохраняем файл в папку Files в каталоге wwwroot
      using (var fileStream = new FileStream(_appEnvironment.WebRootPath + path, FileMode.Create))
      {
        await imageFile.CopyToAsync(fileStream);
      }

      var image = new Image {Name = imageFile.FileName, Path = path};
      _context.Images.Add(image);
      _context.SaveChanges();
      return image;
    }
  }
}