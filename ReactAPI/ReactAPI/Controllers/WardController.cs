using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;


[ApiController]
[Route("api/ward")]
public class WardController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public WardController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetWard()
    {
        var ward = await _context.Ward.ToListAsync();
        return Ok(ward);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetWard(int id)
    {
        var ward = await _context.Ward.FindAsync(id);

        if (ward == null)
        {
            return NotFound();
        }

        return Ok(ward);
    }

    private bool WardExists(int id)
    {
        return _context.Ward.Any(w => w.Id == id);
    }
}


