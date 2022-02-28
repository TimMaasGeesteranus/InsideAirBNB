using InsideAirBNB_API.Models;

namespace InsideAirBNB_API.Repositories
{
    public interface IListingRepository
    {
        IEnumerable<SummaryListing> GetAll();
        IEnumerable<Review> GetReviewsById(int id);
    }
}
