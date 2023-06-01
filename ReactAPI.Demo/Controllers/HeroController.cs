using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

[ApiController]
[Route("api/heroe")]
public class HeroController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public HeroController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetHero()
    {
        var hero = await _context.Hero.ToListAsync();
        return Ok(hero);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetHero(int id)
    {
        var hero = await _context.Hero.FindAsync(id);

        if (hero == null)
        {
            return NotFound();
        }

        return Ok(hero);
    }

    [HttpPost]
    public async Task<IActionResult> CreateHero(Hero hero)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Hero.Add(hero);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetHero), new { id = hero.Id }, hero);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateHero(int id, Hero hero)
    {
        if (id != hero.Id)
        {
            return BadRequest();
        }

        _context.Entry(hero).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!HeroExists(id))
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
    public async Task<IActionResult> DeleteHero(int id)
    {
        var hero = await _context.Hero.FindAsync(id);

        if (hero == null)
        {
            return NotFound();
        }

        _context.Hero.Remove(hero);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool HeroExists(int id)
    {
        return _context.Hero.Any(h => h.Id == id);
    }
}
