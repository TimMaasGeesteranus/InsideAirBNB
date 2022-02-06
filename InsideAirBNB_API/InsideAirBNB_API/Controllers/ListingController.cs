using InsideAirBNB_API.Context;
using Microsoft.AspNetCore.Mvc;

namespace InsideAirBNB_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListingController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public ListingController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public IActionResult GetListings()
        {
            var listings = _appDbContext.SummaryListings.Take(20);

            return Ok(listings);
        }
    }
}
