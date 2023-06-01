using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class ItemInventory
{
    public int Id { get; set; }

    public int AccountId { get; set; }
    public Account? Account { get; set; }

    public int ItemOnHeroId { get; set; }
    public ItemOnHero? ItemOnHero { get; set; }
    public int CountItem { get; set; }

}