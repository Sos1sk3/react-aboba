using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Data.Entities;

public class CourierLike
{
    public int Id { get; set; }
    public int AccountId { get; set; }
    public int CourierId { get; set; }

}