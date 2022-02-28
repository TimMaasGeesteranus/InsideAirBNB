using InsideAirBNB_API.Context;
using InsideAirBNB_API.Models;

namespace InsideAirBNB_API.Repositories
{
    public class ListingRepository : IListingRepository
    {
        private readonly AppDbContext _appDbContext;

        public ListingRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public IEnumerable<SummaryListing> GetAll()
        {
            return _appDbContext.SummaryListings;
        }

        public IEnumerable<MinimalListing> GetMinimalInfoByNeighbourhood(string neighbourhood)
        {
            var listings = _appDbContext.SummaryListings
                .Where(x => x.Neighbourhood == neighbourhood)
                .Select(l => new MinimalListing
                {
                    Latitude = l.Latitude,
                    Longitude = l.Longitude,
                    Name = l.Name,
                    HostName = l.HostName,
                    Id = l.Id,
                });

            return listings;
        }

        public IEnumerable<Review> GetReviewsById(int id)
        {
            return _appDbContext.Reviews.Where(r => r.ListingId == id);
        }

        public IEnumerable<SummaryListing> GetTop100()
        {
            return _appDbContext.SummaryListings.Take(100);
        }
    }
}
