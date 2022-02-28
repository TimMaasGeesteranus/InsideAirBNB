using InsideAirBNB_API.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace InsideAirBNB_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NeighbourhoodController : ControllerBase
    {
        private readonly INeighbourhoodRepository _neighbourhoodRepository;

        public NeighbourhoodController(INeighbourhoodRepository neighbourhoodRepository)
        {
            _neighbourhoodRepository = neighbourhoodRepository;
        }

        [HttpGet]
        public IActionResult GetNeighbourhoods()
        {
            var neighbourhoods = _neighbourhoodRepository.GetAll();
            return Ok(neighbourhoods);
        }
    }
}
