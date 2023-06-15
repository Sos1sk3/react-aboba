using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class Orders
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    public string? Username { get; set; }
    public string? ItemName { get; set; }
    public int Price { get; set; }
    public int Quantity { get; set; }

}