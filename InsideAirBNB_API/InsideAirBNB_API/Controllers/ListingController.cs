using InsideAirBNB_API.Context;
using InsideAirBNB_API.Models;
using InsideAirBNB_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;
using System.Text;

namespace InsideAirBNB_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListingController : ControllerBase
    {
        private readonly IListingRepository _listingRepository;
        private readonly IDistributedCache distributedCache;

        public ListingController(IListingRepository listingRepository, IDistributedCache distributedCache)
        {
            _listingRepository = listingRepository;
            this.distributedCache = distributedCache;
        }

        [HttpGet("/all")]
        public IActionResult GetAll()
        {
            var listings = _listingRepository.GetAll();
            return Ok(listings);
        }

        [HttpGet("/minimal/{neighbourhood}")]
        public async Task<IActionResult> GetMinimalInfo(string neighbourhood)
        {
            var cacheKey = neighbourhood.ToLower();

            IEnumerable<MinimalListing> listings = new List<MinimalListing>();
            string serializedData;

            var encodedData = await distributedCache.GetAsync(cacheKey);


            if (encodedData != null)
            {
                serializedData = Encoding.UTF8.GetString(encodedData);
                listings = JsonConvert.DeserializeObject<List<MinimalListing>>(serializedData);
            }
            else
            {
                try
                {
                    listings = _listingRepository.GetMinimalInfoByNeighbourhood(neighbourhood);
                    serializedData = JsonConvert.SerializeObject(listings);
                    encodedData = Encoding.UTF8.GetBytes(serializedData);
                    var options = new DistributedCacheEntryOptions()
                        .SetSlidingExpiration(TimeSpan.FromMinutes(5))
                        .SetAbsoluteExpiration(DateTime.Now.AddHours(6));

                    await distributedCache.SetAsync(cacheKey, encodedData, options);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return Ok(listings);
        }

        [HttpPost("/filtered")]
        public IActionResult GetFiltered([FromBody] Filters filters)
        {
            var listings = _listingRepository.GetFiltered(filters);
            return Ok(listings);
        }

        [HttpGet("{id}")]
        public IActionResult GetAveragesByListingId(string id)
        {
            var listing = _listingRepository.GetListingById(Int32.Parse(id));
            return Ok(listing);
        }
    }
}
