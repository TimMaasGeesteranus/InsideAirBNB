using InsideAirBNB_API.Models;

namespace InsideAirBNB_API.Repositories
{
    public interface IListingRepository
    {
        IEnumerable<MinimalListing> GetMinimalInfoByNeighbourhood(string neighbourhood);

        ListingWithStats GetListingById(int id);
    }
}
