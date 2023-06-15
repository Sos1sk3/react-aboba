using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAPI.Data;
using ReactAPI.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactAPI.Data.Entities;

    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orders>>> GetOrders()
        {
            var orders = await _context.Orders.ToListAsync();
            return Ok(orders);
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<Orders>> GetOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        
        [HttpPost]
        public async Task<ActionResult<Orders>> CreateOrder(Orders order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
        }

        

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderExists(int id)
        {
            return _context.Orders.Any(o => o.Id == id);
        }
    }

