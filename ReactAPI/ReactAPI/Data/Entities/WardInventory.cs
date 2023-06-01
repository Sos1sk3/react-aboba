using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class WardInventory
{
    public int Id { get; set; }

    public int AccountId { get; set; }
    public Account? Account { get; set; }

    public int WardId { get; set; }
    public Ward? Ward { get; set; }
    public int CountWard { get; set; }

}