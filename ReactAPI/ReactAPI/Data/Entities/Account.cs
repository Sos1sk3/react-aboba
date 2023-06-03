using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class Account
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }
    public string? Steam { get; set; }
    public string? Login { get; set; }

}