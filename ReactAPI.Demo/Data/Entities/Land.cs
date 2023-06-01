using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class Land
{
    public int Id { get; set; }
    public int Price { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public string? Style { get; set; }
    public string? Image { get; set; }

}