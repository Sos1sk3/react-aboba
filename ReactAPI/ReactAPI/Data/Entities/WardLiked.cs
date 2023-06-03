using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class WardLiked
{
    public int Id { get; set; }

    public int AccountId { get; set; }

    public int WardId { get; set; }


}