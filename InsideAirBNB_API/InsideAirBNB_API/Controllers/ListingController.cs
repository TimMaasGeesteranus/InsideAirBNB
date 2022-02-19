using InsideAirBNB_API.Context;
using InsideAirBNB_API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InsideAirBNB_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Authorize]
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
            var listings = _appDbContext.SummaryListings.Take(100);
            //var listings = _appDbContext.SummaryListings;


            return Ok(listings);
        }

        [Authorize]
        [HttpGet("/test")]
        public IActionResult GetTest()
        {
            Listing listing = new();
            listing.Description = "A very beatiful place to live";
            listing.Name = "My beatiful house";
            return Ok(listing);
        }
    }
}
