using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

[ApiController]
[Route("api/[controller]")]
public class LandInventoryController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public LandInventoryController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/LandInventory
    [HttpGet]
    public async Task<ActionResult<IEnumerable<LandInventory>>> GetLandInventory()
    {
        var landInventory = await _context.LandInventory.ToListAsync();
        return Ok(landInventory);
    }

    // GET: api/LandInventory/5
    [HttpGet("{id}")]
    public async Task<ActionResult<LandInventory>> GetLandInventory(int id)
    {
        var landInventory = await _context.LandInventory.FindAsync(id);

        if (landInventory == null)
        {
            return NotFound();
        }

        return Ok(landInventory);
    }

    [HttpGet("ByAccountId/{accountId}")]
    public async Task<ActionResult<IEnumerable<LandInventory>>> GetLandInventoryByAccountId(int accountId)
    {
        var landInventory = await _context.LandInventory
            .Where(c => c.AccountId == accountId)
            .ToListAsync();

        if (landInventory == null)
        {
            return NotFound();
        }

        return Ok(landInventory);
    }


    // POST: api/LandInventory
    [HttpPost]
    public async Task<ActionResult<LandInventory>> CreateLandInventory(LandInventory landInventory)
    {
        _context.LandInventory.Add(landInventory);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetLandInventory", new { id = landInventory.Id }, landInventory);
    }

    // DELETE: api/LandInventory/Land/{landId}
    [HttpDelete("Land/{landId}")]
    public async Task<IActionResult> DeleteLandInventoryByLandId(int landId)
    {
        var landInventory = await _context.LandInventory.FirstOrDefaultAsync(l => l.LandId == landId);

        if (landInventory == null)
        {
            return NotFound();
        }

        _context.LandInventory.Remove(landInventory);
        await _context.SaveChangesAsync();

        return NoContent();
    }

// DELETE: api/LandInventory/ByAccountId/5
    [HttpDelete("ByAccountId/{accountId}")]
    public async Task<IActionResult> DeleteLandInventoryByAccountId(int accountId)
    {
        var landInventory = await _context.LandInventory
            .Where(c => c.AccountId == accountId)
            .ToListAsync();

        if (landInventory == null)
        {
            return NotFound();
        }

        _context.LandInventory.RemoveRange(landInventory);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("ByAccountIdAndLandId/{accountId}/{landId}")]
    public async Task<IActionResult> DeleteLandInventoryByAccountIdAndLandId(int accountId, int landId)
    {
        var landInventory = await _context.LandInventory
            .Where(c => c.AccountId == accountId && c.LandId == landId)
            .ToListAsync();

        if (landInventory == null || landInventory.Count == 0)
        {
            return NotFound();
        }

        _context.LandInventory.RemoveRange(landInventory);
        await _context.SaveChangesAsync();

        return NoContent();
    }


    private bool LandInventoryExists(int id)
    {
        return _context.LandInventory.Any(l => l.Id == id);
    }
}
