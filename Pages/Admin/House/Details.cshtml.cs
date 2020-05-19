using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using from_blueprint.Database;
using from_blueprint.Models;

namespace from_blueprint.Pages_Admin_House
{
    public class DetailsModel : PageModel
    {
        private readonly from_blueprint.Database.ApplicationContext _context;

        public DetailsModel(from_blueprint.Database.ApplicationContext context)
        {
            _context = context;
        }

        public House House { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            House = await _context.Houses.FirstOrDefaultAsync(m => m.Id == id);

            if (House == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
