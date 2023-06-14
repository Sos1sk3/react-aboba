using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class CourierInventory
{
    public int Id { get; set; }

    public int AccountId { get; set; }

    public int CourierId { get; set; }
    public int Quantity { get; set; }

}