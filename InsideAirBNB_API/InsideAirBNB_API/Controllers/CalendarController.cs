using InsideAirBNB_API.Context;
using Microsoft.AspNetCore.Mvc;

namespace InsideAirBNB_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalendarController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public CalendarController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var test = _appDbContext.Calendars;
            return Ok(test);
        }
    }
}
