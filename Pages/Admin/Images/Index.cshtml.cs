using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using from_blueprint.Database;
using from_blueprint.Models;

namespace from_blueprint.Pages_Images
{
    public class IndexModel : PageModel
    {
        private readonly from_blueprint.Database.ApplicationContext _context;

        public IndexModel(from_blueprint.Database.ApplicationContext context)
        {
            _context = context;
        }

        public IList<Image> Image { get;set; }

        public async Task OnGetAsync()
        {
            Image = await _context.Images.ToListAsync();
        }
    }
}
