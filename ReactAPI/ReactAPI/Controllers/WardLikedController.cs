using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;


[ApiController]
[Route("api/[controller]")]
public class WardLikedController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public WardLikedController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/WardLiked
    [HttpGet]
    public async Task<ActionResult<IEnumerable<WardLiked>>> GetWardLiked()
    {
        var wardLiked = await _context.WardLiked.ToListAsync();
        return Ok(wardLiked);
    }

    // GET: api/WardLiked/5
    [HttpGet("{id}")]
    public async Task<ActionResult<WardLiked>> GetWardLiked(int id)
    {
        var wardLiked = await _context.WardLiked.FindAsync(id);

        if (wardLiked == null)
        {
            return NotFound();
        }

        return Ok(wardLiked);
    }

    [HttpGet("ByAccountId/{accountId}")]
    public async Task<ActionResult<IEnumerable<WardLiked>>> GetWardLikedByAccountId(int accountId)
    {
        var wardLiked = await _context.WardLiked
            .Where(c => c.AccountId == accountId)
            .ToListAsync();

        if (wardLiked == null)
        {
            return NotFound();
        }

        return Ok(wardLiked);
    }


    // POST: api/WardLiked
    [HttpPost]
    public async Task<ActionResult<WardLiked>> CreateWardLiked(WardLiked wardLiked)
    {
        _context.WardLiked.Add(wardLiked);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetWardLiked", new { id = wardLiked.Id }, wardLiked);
    }

    // PUT: api/WardLiked/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateWardLiked(int id, WardLiked wardLiked)
    {
        if (id != wardLiked.Id)
        {
            return BadRequest();
        }

        _context.Entry(wardLiked).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!WardLikedExists(id))
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

    // DELETE: api/WardLiked/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteWardLiked(int id)
    {
        var wardLiked = await _context.WardLiked.FindAsync(id);

        if (wardLiked == null)
        {
            return NotFound();
        }

        _context.WardLiked.Remove(wardLiked);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("Ward/{wardId}")]
    public async Task<IActionResult> DeleteWardLikedByWardId(int wardId)
    {
        var wardLiked = await _context.WardLiked.FirstOrDefaultAsync(c => c.WardId == wardId);

        if (wardLiked == null)
        {
            return NotFound();
        }

        _context.WardLiked.Remove(wardLiked);
        await _context.SaveChangesAsync();

        return NoContent();
    }


    private bool WardLikedExists(int id)
    {
        return _context.WardLiked.Any(w => w.Id == id);
    }
}