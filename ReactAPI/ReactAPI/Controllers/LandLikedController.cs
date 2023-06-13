using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;


[ApiController]
[Route("api/[controller]")]
public class LandLikedController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public LandLikedController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/LandLiked
    [HttpGet]
    public async Task<ActionResult<IEnumerable<LandLiked>>> GetLandLiked()
    {
        var landLiked = await _context.LandLiked.ToListAsync();
        return Ok(landLiked);
    }

    // GET: api/LandLiked/5
    [HttpGet("{id}")]
    public async Task<ActionResult<LandLiked>> GetLandLiked(int id)
    {
        var landLiked = await _context.LandLiked.FindAsync(id);

        if (landLiked == null)
        {
            return NotFound();
        }

        return Ok(landLiked);
    }

    [HttpGet("ByAccountId/{accountId}")]
    public async Task<ActionResult<IEnumerable<LandLiked>>> GetLandLikedByAccountId(int accountId)
    {
        var landLiked = await _context.LandLiked
            .Where(c => c.AccountId == accountId)
            .ToListAsync();

        if (landLiked == null)
        {
            return NotFound();
        }

        return Ok(landLiked);
    }


    // POST: api/LandLiked
    [HttpPost]
    public async Task<ActionResult<LandLiked>> CreateLandLiked(LandLiked landLiked)
    {
        _context.LandLiked.Add(landLiked);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetLandLiked", new { id = landLiked.Id }, landLiked);
    }

    // DELETE: api/LandLiked/Land/{landId}
    [HttpDelete("Land/{landId}")]
    public async Task<IActionResult> DeleteLandLikedByLandId(int landId)
    {
        var landLiked = await _context.LandLiked.FirstOrDefaultAsync(l => l.LandId == landId);

        if (landLiked == null)
        {
            return NotFound();
        }

        _context.LandLiked.Remove(landLiked);
        await _context.SaveChangesAsync();

        return NoContent();
    }


    private bool LandLikedExists(int id)
    {
        return _context.LandLiked.Any(l => l.Id == id);
    }
}
