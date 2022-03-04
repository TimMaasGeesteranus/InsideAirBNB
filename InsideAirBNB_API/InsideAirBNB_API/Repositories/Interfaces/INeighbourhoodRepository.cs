using InsideAirBNB_API.Models;

namespace InsideAirBNB_API.Repositories.Interfaces
{
    public interface INeighbourhoodRepository
    {
        public IEnumerable<String> GetAll();
        public double GetAvgPricePerNeighbourhood(string neighbourhood);
        public double GetAvgAvailabilityPerNeighbourhood(string neighbourhood);
    }
}
