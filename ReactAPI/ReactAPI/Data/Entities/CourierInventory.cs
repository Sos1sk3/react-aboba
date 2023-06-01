using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class CourierInventory
{
    public int Id { get; set; }

    public int AccountId { get; set; }
    public Account? Account { get; set; }

    public int CourierId { get; set; }
    public Courier? Courier { get; set; }
    public int CountCourier { get; set; }

}