using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class LandLike
{
    public int Id { get; set; }

    public int AccountId { get; set; }

    public int LandId { get; set; }


}