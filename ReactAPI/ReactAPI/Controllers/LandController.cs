using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

[ApiController]
[Route("api/land")]
public class LandController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public LandController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetLand()
    {
        var land = await _context.Land.ToListAsync();
        return Ok(land);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetLand(int id)
    {
        var land = await _context.Land.FindAsync(id);

        if (land == null)
        {
            return NotFound();
        }

        return Ok(land);
    }


    private bool LandExists(int id)
    {
        return _context.Land.Any(l => l.Id == id);
    }
}
