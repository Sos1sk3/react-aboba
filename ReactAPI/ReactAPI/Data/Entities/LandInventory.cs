using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class LandInventory
{
    public int Id { get; set; }

    public int AccountId { get; set; }
    public Account? Account { get; set; }

    public int LandId { get; set; }
    public Land? Land { get; set; }
    public int CountLand { get; set; }
}