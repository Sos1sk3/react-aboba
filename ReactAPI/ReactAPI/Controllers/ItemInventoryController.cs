using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

[ApiController]
[Route("api/[controller]")]
public class ItemInventoryController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ItemInventoryController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/ItemInventory
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ItemInventory>>> GetItemInventory()
    {
        var itemInventory = await _context.ItemInventory.ToListAsync();
        return Ok(itemInventory);
    }

    // GET: api/ItemInventory/5
    [HttpGet("{id}")]
    public async Task<ActionResult<ItemInventory>> GetItemInventory(int id)
    {
        var itemInventory = await _context.ItemInventory.FindAsync(id);

        if (itemInventory == null)
        {
            return NotFound();
        }

        return Ok(itemInventory);
    }

    // POST: api/ItemInventory
    [HttpPost]
    public async Task<ActionResult<ItemInventory>> CreateItemInventory(ItemInventory itemInventory)
    {
        _context.ItemInventory.Add(itemInventory);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetItemInventory", new { id = itemInventory.Id }, itemInventory);
    }

    // PUT: api/ItemInventory/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateItemInventory(int id, ItemInventory itemInventory)
    {
        if (id != itemInventory.Id)
        {
            return BadRequest();
        }

        _context.Entry(itemInventory).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ItemInventoryExists(id))
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

    // DELETE: api/ItemInventory/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteItemInventory(int id)
    {
        var itemInventory = await _context.ItemInventory.FindAsync(id);

        if (itemInventory == null)
        {
            return NotFound();
        }

        _context.ItemInventory.Remove(itemInventory);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ItemInventoryExists(int id)
    {
        return _context.ItemInventory.Any(i => i.Id == id);
    }
}
