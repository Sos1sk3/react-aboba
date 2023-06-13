using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

[ApiController]
[Route("api/[controller]")]
public class WardInventoryController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public WardInventoryController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/WardInventory
    [HttpGet]
    public async Task<ActionResult<IEnumerable<WardInventory>>> GetWardInventory()
    {
        var wardInventory = await _context.WardInventory.ToListAsync();
        return Ok(wardInventory);
    }

    // GET: api/WardInventory/5
    [HttpGet("{id}")]
    public async Task<ActionResult<WardInventory>> GetWardInventory(int id)
    {
        var wardInventory = await _context.WardInventory.FindAsync(id);

        if (wardInventory == null)
        {
            return NotFound();
        }

        return Ok(wardInventory);
    }

    [HttpGet("ByAccountId/{accountId}")]
    public async Task<ActionResult<IEnumerable<WardInventory>>> GetWardInventoryByAccountId(int accountId)
    {
        var wardInventory = await _context.WardInventory
            .Where(c => c.AccountId == accountId)
            .ToListAsync();

        if (wardInventory == null)
        {
            return NotFound();
        }

        return Ok(wardInventory);
    }


    // POST: api/WardInventory
    [HttpPost]
    public async Task<ActionResult<WardInventory>> CreateWardInventory(WardInventory wardInventory)
    {
        _context.WardInventory.Add(wardInventory);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetWardInventory", new { id = wardInventory.Id }, wardInventory);
    }

[HttpDelete("Ward/{wardId}")]
public async Task<IActionResult> DeleteWardInventoryByWardId(int wardId)
{
    var wardInventory = await _context.WardInventory.FirstOrDefaultAsync(c => c.WardId == wardId);

    if (wardInventory == null)
    {
        return NotFound();
    }

    _context.WardInventory.Remove(wardInventory);
    await _context.SaveChangesAsync();

    return NoContent();
}

// DELETE: api/WardInventory/ByAccountId/5
    [HttpDelete("ByAccountId/{accountId}")]
    public async Task<IActionResult> DeleteWardInventoryByAccountId(int accountId)
    {
        var wardInventory = await _context.WardInventory
            .Where(c => c.AccountId == accountId)
            .ToListAsync();

        if (wardInventory == null)
        {
            return NotFound();
        }

        _context.WardInventory.RemoveRange(wardInventory);
        await _context.SaveChangesAsync();

        return NoContent();
    }


    private bool WardInventoryExists(int id)
    {
        return _context.WardInventory.Any(w => w.Id == id);
    }
}
