using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

[ApiController]
[Route("api/courier")]
public class CourierController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CourierController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetCourier()
    {
        var courier = await _context.Courier.ToListAsync();
        return Ok(courier);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCourier(int id)
    {
        var courier = await _context.Courier.FindAsync(id);

        if (courier == null)
        {
            return NotFound();
        }

        return Ok(courier);
    }

    [HttpPost]
    public async Task<IActionResult> CreateCourier(Courier courier)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Courier.Add(courier);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetCourier), new { id = courier.Id }, courier);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCourier(int id, Courier courier)
    {
        if (id != courier.Id)
        {
            return BadRequest();
        }

        _context.Entry(courier).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CourierExists(id))
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

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCourier(int id)
    {
        var courier = await _context.Courier.FindAsync(id);

        if (courier == null)
        {
            return NotFound();
        }

        _context.Courier.Remove(courier);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool CourierExists(int id)
    {
        return _context.Courier.Any(c => c.Id == id);
    }
}
