using InsideAirBNB_API.Context;
using InsideAirBNB_API.Models;
using InsideAirBNB_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InsideAirBNB_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Authorize]
    public class ListingController : ControllerBase
    {
        private readonly IListingRepository _listingRepository;

        public ListingController(IListingRepository listingRepository)
        {
            _listingRepository = listingRepository;
        }

        [HttpGet("/minimal/{neighbourhood}")]
        public IActionResult GetMinimalInfo(string neighbourhood)
        {
            var listings = _listingRepository.GetMinimalInfoByNeighbourhood(neighbourhood).Take(10);
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

        [HttpGet("{_id}")]
        public IActionResult GetAveragesByListingId(string _id)
        {
            var reviews = _listingRepository.GetReviewsById(Int32.Parse(_id));         
            return Ok(reviews);
        }
    }
}
