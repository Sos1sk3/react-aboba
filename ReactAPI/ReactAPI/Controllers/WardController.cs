using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

/*[ApiController]
[Route("api/users")]
public class WardController : ControllerBase
{
  private readonly ApplicationContext _context;

  public WardController(ApplicationContext context)
  {
    _context = context;
  }

  [HttpGet]
  public async Task<IActionResult> GetWard()
  {
    var ward = await _context.Ward.ToListAsync();
    return Ok(ward);
  }

  
}*/

[ApiController]
[Route("api/ward")]
public class WardController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public WardController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetWard()
    {
        var ward = await _context.Ward.ToListAsync();
        return Ok(ward);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetWard(int id)
    {
        var ward = await _context.Ward.FindAsync(id);

        if (ward == null)
        {
            return NotFound();
        }

        return Ok(ward);
    }

    [HttpPost]
    public async Task<IActionResult> CreateWard(Ward ward)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Ward.Add(ward);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetWard), new { id = ward.Id }, ward);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateWard(int id, Ward ward)
    {
        if (id != ward.Id)
        {
            return BadRequest();
        }

        _context.Entry(ward).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!WardExists(id))
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
    public async Task<IActionResult> DeleteWard(int id)
    {
        var ward = await _context.Ward.FindAsync(id);

        if (ward == null)
        {
            return NotFound();
        }

        _context.Ward.Remove(ward);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool WardExists(int id)
    {
        return _context.Ward.Any(w => w.Id == id);
    }
}


