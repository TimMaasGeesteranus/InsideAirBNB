using InsideAirBNB_API.Repositories;
using InsideAirBNB_API.Repositories.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InsideAirBNB_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StatisticController : ControllerBase
    {
        private readonly IListingRepository _listingRepository;
        private readonly INeighbourhoodRepository _neighbourhoodRepository;

        public StatisticController(IListingRepository listingRepository, INeighbourhoodRepository neighbourhoodRepository)
        {
            _listingRepository = listingRepository;
            _neighbourhoodRepository = neighbourhoodRepository;
        }

        [Authorize]
        [HttpGet("/priceperneighbourhood")]
        public IActionResult GetPricePerNeighbourhood()
        {
            var results = new Dictionary<string, double>();

            var neighbourhoods = _neighbourhoodRepository.GetAll();
            foreach (var neighbourhood in neighbourhoods)
            {
                var price = _neighbourhoodRepository.GetAvgPricePerNeighbourhood(neighbourhood);
                results.Add(neighbourhood, Math.Round(price, 2));
            }

            return Ok(results);
        }

        [Authorize]
        [HttpGet("/availabilityperneighbourhood")]
        public IActionResult GetAvailabilityPerNeighbourhood()
        {
            var results = new Dictionary<string, double>();

            var neighbourhoods = _neighbourhoodRepository.GetAll();
            foreach (var neighbourhood in neighbourhoods)
            {
                var availability = _neighbourhoodRepository.GetAvgAvailabilityPerNeighbourhood(neighbourhood);
                results.Add(neighbourhood, Math.Round(availability, 2));
            }

            return Ok(results);
        }
    }
}
