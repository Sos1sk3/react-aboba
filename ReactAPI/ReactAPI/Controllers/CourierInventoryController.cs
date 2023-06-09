using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

[ApiController]
[Route("api/[controller]")]
public class CourierInventoryController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CourierInventoryController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/CourierInventory
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CourierInventory>>> GetCourierInventory()
    {
        var courierInventory = await _context.CourierInventory.ToListAsync();
        return Ok(courierInventory);
    }

    // GET: api/CourierInventory/5
    [HttpGet("{id}")]
    public async Task<ActionResult<CourierInventory>> GetCourierInventory(int id)
    {
        var courierInventory = await _context.CourierInventory.FindAsync(id);

        if (courierInventory == null)
        {
            return NotFound();
        }

        return Ok(courierInventory);
    }


    [HttpGet("ByAccountId/{accountId}")]
    public async Task<ActionResult<IEnumerable<CourierInventory>>> GetCourierInventoryByAccountId(int accountId)
    {
        var courierInventory = await _context.CourierInventory
            .Where(c => c.AccountId == accountId)
            .ToListAsync();

        if (courierInventory == null)
        {
            return NotFound();
        }

        return Ok(courierInventory);
    }

    // POST: api/CourierInventory
    [HttpPost]
    public async Task<ActionResult<CourierInventory>> CreateCourierInventory(CourierInventory courierInventory)
    {
        _context.CourierInventory.Add(courierInventory);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetCourierInventory", new { id = courierInventory.Id }, courierInventory);
    }

// DELETE: api/CourierInventory/Courier/{courierId}
[HttpDelete("Courier/{courierId}")]
public async Task<IActionResult> DeleteCourierInventoryByCourierId(int courierId)
{
    var courierInventory = await _context.CourierInventory.FirstOrDefaultAsync(c => c.CourierId == courierId);

    if (courierInventory == null)
    {
        return NotFound();
    }

    _context.CourierInventory.Remove(courierInventory);
    await _context.SaveChangesAsync();

    return NoContent();
}

    // DELETE: api/CourierInventory/ByAccountId/5
    [HttpDelete("ByAccountId/{accountId}")]
    public async Task<IActionResult> DeleteCourierInventoryByAccountId(int accountId)
    {
        var courierInventory = await _context.CourierInventory
            .Where(c => c.AccountId == accountId)
            .ToListAsync();

        if (courierInventory == null)
        {
            return NotFound();
        }

        _context.CourierInventory.RemoveRange(courierInventory);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("ByAccountIdAndCourierId/{accountId}/{courierId}")]
    public async Task<IActionResult> DeleteCourierInventoryByAccountIdAndCourierId(int accountId, int courierId)
    {
        var courierInventory = await _context.CourierInventory
            .Where(c => c.AccountId == accountId && c.CourierId == courierId)
            .ToListAsync();

        if (courierInventory == null || courierInventory.Count == 0)
        {
            return NotFound();
        }

        _context.CourierInventory.RemoveRange(courierInventory);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool CourierInventoryExists(int id)
    {
        return _context.CourierInventory.Any(c => c.Id == id);
    }
}