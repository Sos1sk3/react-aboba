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

    private bool CourierExists(int id)
    {
        return _context.Courier.Any(c => c.Id == id);
    }
}
