using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class Ward
{
    public int Id { get; set; }
    public int Price { get; set; }
    public int RadiusOfVision { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    public string? Status { get; set; }
    public string? Samocvet { get; set; }
    public string? Image { get; set; }

}