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
            return _appDbContext.SummaryListings.Take(100);
        }

        public IEnumerable<Review> GetReviewsById(int id)
        {
            return _appDbContext.Reviews.Where(r => r.ListingId == id);
        }
    }
}
