using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;
public class ItemOnHeroLike
{
    public int Id { get; set; }
    public int AccountId { get; set; }
    public int ItemOnHeroId { get; set; }

}