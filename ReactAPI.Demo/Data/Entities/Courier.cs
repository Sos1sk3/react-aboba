using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class Courier
{
    public int Id { get; set; }
    public int Price { get; set; }
    public int Movespeed { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public string? Rarity { get; set; }
    public string? ImageWalk { get; set; }
    public string? ImageFly { get; set; }

}