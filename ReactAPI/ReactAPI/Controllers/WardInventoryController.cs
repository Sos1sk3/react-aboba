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

    // PUT: api/WardInventory/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateWardInventory(int id, WardInventory wardInventory)
    {
        if (id != wardInventory.Id)
        {
            return BadRequest();
        }

        _context.Entry(wardInventory).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!WardInventoryExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // DELETE: api/WardInventory/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteWardInventory(int id)
    {
        var wardInventory = await _context.WardInventory.FindAsync(id);

        if (wardInventory == null)
        {
            return NotFound();
        }

        _context.WardInventory.Remove(wardInventory);
        await _context.SaveChangesAsync();

        return NoContent();
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


    private bool WardInventoryExists(int id)
    {
        return _context.WardInventory.Any(w => w.Id == id);
    }
}
