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


    [HttpPost]
    public async Task<IActionResult> CreateLand(Land land)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Land.Add(land);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetLand), new { id = land.Id }, land);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateLand(int id, Land land)
    {
        if (id != land.Id)
        {
            return BadRequest();
        }

        _context.Entry(land).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!LandExists(id))
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
    public async Task<IActionResult> DeleteLand(int id)
    {
        var land = await _context.Land.FindAsync(id);

        if (land == null)
        {
            return NotFound();
        }

        _context.Land.Remove(land);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool LandExists(int id)
    {
        return _context.Land.Any(l => l.Id == id);
    }
}
