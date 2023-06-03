using Microsoft.EntityFrameworkCore;
using ReactAPI.Data.Entities;

namespace ReactAPI.Data;

public class ApplicationDbContext : DbContext
{
    public DbSet<Account> Account { get; set; } = null!;
    public DbSet<Hero> Hero { get; set; } = null!;
    public DbSet<Courier> Courier { get; set; } = null!;
    public DbSet<Ward> Ward { get; set; } = null!;
    public DbSet<Land> Land { get; set; } = null!;
    public DbSet<ItemOnHero> ItemOnHero { get; set; } = null!;
    public DbSet<ItemInventory> ItemInventory { get; set; } = null!;
    public DbSet<CourierInventory> CourierInventory { get; set; } = null!;
    public DbSet<WardInventory> WardInventory { get; set; } = null!;
    public DbSet<LandInventory> LandInventory { get; set; } = null!;
    public DbSet<ItemOnHeroLiked> ItemOnHeroLiked { get; set; } = null!;
    public DbSet<CourierLiked> CourierLiked { get; set; } = null!;
    public DbSet<WardLiked> WardLiked { get; set; } = null!;
    public DbSet<LandLiked> LandLiked { get; set; } = null!;


    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {

    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=PudgeOnSofa;Trusted_Connection=True;");
    }
}