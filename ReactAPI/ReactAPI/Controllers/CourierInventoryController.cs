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

    // POST: api/CourierInventory
    [HttpPost]
    public async Task<ActionResult<CourierInventory>> CreateCourierInventory(CourierInventory courierInventory)
    {
        _context.CourierInventory.Add(courierInventory);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetCourierInventory", new { id = courierInventory.Id }, courierInventory);
    }

    // PUT: api/CourierInventory/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCourierInventory(int id, CourierInventory courierInventory)
    {
        if (id != courierInventory.Id)
        {
            return BadRequest();
        }

        _context.Entry(courierInventory).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CourierInventoryExists(id))
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

    // DELETE: api/CourierInventory/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCourierInventory(int id)
    {
        var courierInventory = await _context.CourierInventory.FindAsync(id);

        if (courierInventory == null)
        {
            return NotFound();
        }

        _context.CourierInventory.Remove(courierInventory);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool CourierInventoryExists(int id)
    {
        return _context.CourierInventory.Any(c => c.Id == id);
    }
}
