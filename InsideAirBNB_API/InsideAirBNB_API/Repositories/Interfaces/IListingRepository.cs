using InsideAirBNB_API.Models;

namespace InsideAirBNB_API.Repositories
{
    public interface IListingRepository
    {
        IEnumerable<SummaryListing> GetAll();
        IEnumerable<SummaryListing> GetTop100();
        IEnumerable<MinimalListing> GetMinimalInfoByNeighbourhood(string neighbourhood);

        IEnumerable<Review> GetReviewsById(int id);
    }
}
