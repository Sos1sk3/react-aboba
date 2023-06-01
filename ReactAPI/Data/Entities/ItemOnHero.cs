using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class ItemOnHero
{
    public int Id { get; set; }
    public int Price { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public string? Rarity { get; set; }
    public string? Image { get; set; }

    public int HeroId { get; set; }
    public Hero? Hero { get; set; }
}
