using InsideAirBNB_API.Context;
using InsideAirBNB_API.Models;
using InsideAirBNB_API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace InsideAirBNB_API.Repositories
{
    public class NeighbourhoodRepository : INeighbourhoodRepository
    {
        private readonly AppDbContext _appDbContext;

        public NeighbourhoodRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public IEnumerable<string> GetAll()
        {
            var list = _appDbContext.Neighbourhoods.Select(n => n.Neighbourhood1);
            return list;
        }

        public double GetAvgPricePerNeighbourhood(string neighbourhood)
        {
            return (double)_appDbContext.SummaryListings
                .Where(l => l.Neighbourhood == neighbourhood)
                .Select(l => l.Price)
                .Average();

        }

        public double GetAvgAvailabilityPerNeighbourhood(string neighbourhood)
        {
            var sListings = _appDbContext.SummaryListings
                .Where(l => l.Neighbourhood == neighbourhood)
                .Select(l => l.Id);

            var listings = _appDbContext.Listings
                .Where(l => sListings.Contains(l.Id))
                .Select(l => l.Availability365);           

            return (double)(listings.Average() / 12);

        }
    }
}
