using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class Hero
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public string? Attribute { get; set; }
    public string? Image { get; set; }

    public List<ItemOnHero> ItemOnHeroes { get; set; } = new();

}

