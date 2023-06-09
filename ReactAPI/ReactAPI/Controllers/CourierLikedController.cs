using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;


[ApiController]
[Route("api/[controller]")]
public class CourierLikedController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CourierLikedController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/CourierLiked
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CourierLiked>>> GetCourierLiked()
    {
        var courierLiked = await _context.CourierLiked.ToListAsync();
        return Ok(courierLiked);
    }

    // GET: api/CourierLiked/5
    [HttpGet("{id}")]
    public async Task<ActionResult<CourierLiked>> GetCourierLiked(int id)
    {
        var courierLiked = await _context.CourierLiked.FindAsync(id);

        if (courierLiked == null)
        {
            return NotFound();
        }

        return Ok(courierLiked);
    }


    [HttpGet("ByAccountId/{accountId}")]
    public async Task<ActionResult<IEnumerable<CourierLiked>>> GetCourierLikedByAccountId(int accountId)
    {
        var courierLiked = await _context.CourierLiked
            .Where(c => c.AccountId == accountId)
            .ToListAsync();

        if (courierLiked == null)
        {
            return NotFound();
        }

        return Ok(courierLiked);
    }

    // POST: api/CourierLiked
    [HttpPost]
    public async Task<ActionResult<CourierLiked>> CreateCourierLiked(CourierLiked courierLiked)
    {
        _context.CourierLiked.Add(courierLiked);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetCourierLiked", new { id = courierLiked.Id }, courierLiked);
    }

    // DELETE: api/CourierLiked/Courier/{courierId}
    [HttpDelete("Courier/{courierId}")]
    public async Task<IActionResult> DeleteCourierLikedByCourierId(int courierId)
    {
        var courierLiked = await _context.CourierLiked.FirstOrDefaultAsync(c => c.CourierId == courierId);

        if (courierLiked == null)
        {
            return NotFound();
        }

        _context.CourierLiked.Remove(courierLiked);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("ByAccountAndCourier/{accountId}/{courierId}")]
    public async Task<IActionResult> DeleteByAccountAndCourier(int accountId, int courierId)
    {
        var courierLiked = await _context.CourierLiked
            .Where(w => w.AccountId == accountId && w.CourierId == courierId)
            .ToListAsync();

        if (courierLiked == null)
        {
            return NotFound();
        }

        _context.CourierLiked.RemoveRange(courierLiked);
        await _context.SaveChangesAsync();

        return NoContent();
    }


    private bool CourierLikedExists(int id)
    {
        return _context.CourierLiked.Any(c => c.Id == id);
    }
}
