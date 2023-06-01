using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

[ApiController]
[Route("api/itemsonhero")]
public class ItemOnHeroesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ItemOnHeroesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetItemsOnHero()
    {
        var itemsOnHero = await _context.ItemOnHero.Include(i => i.Hero).ToListAsync();
        return Ok(itemsOnHero);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetItemOnHero(int id)
    {
        var itemOnHero = await _context.ItemOnHero.Include(i => i.Hero).FirstOrDefaultAsync(i => i.Id == id);

        if (itemOnHero == null)
        {
            return NotFound();
        }

        return Ok(itemOnHero);
    }

    [HttpPost]
    public async Task<IActionResult> CreateItemOnHero(ItemOnHero itemOnHero)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.ItemOnHero.Add(itemOnHero);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetItemOnHero), new { id = itemOnHero.Id }, itemOnHero);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateItemOnHero(int id, ItemOnHero itemOnHero)
    {
        if (id != itemOnHero.Id)
        {
            return BadRequest();
        }

        _context.Entry(itemOnHero).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ItemOnHeroExists(id))
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
    public async Task<IActionResult> DeleteItemOnHero(int id)
    {
        var itemOnHero = await _context.ItemOnHero.FindAsync(id);

        if (itemOnHero == null)
        {
            return NotFound();
        }

        _context.ItemOnHero.Remove(itemOnHero);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ItemOnHeroExists(int id)
    {
        return _context.ItemOnHero.Any(i => i.Id == id);
    }
}
