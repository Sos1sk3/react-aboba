using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class WardLike
{
    public int Id { get; set; }

    public int AccountId { get; set; }

    public int WardId { get; set; }


}