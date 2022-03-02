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

        public ListingWithStats GetListingById(int id)
        {
            Listing listing = _appDbContext.Listings.FirstOrDefault(l => l.Id == id);
            SummaryListing sListing = _appDbContext.SummaryListings.FirstOrDefault(l => l.Id == id);

            var bookingsPerMonth = (int)(listing.Availability365 / 12);
            var earningsPerMonth = (int)(bookingsPerMonth * sListing.Price);

            ListingWithStats listingWithStats = new ListingWithStats
            {
                Id = sListing.Id,
                Name = sListing.Name,
                HostName = sListing.HostName,
                Neighbourhood = sListing.Neighbourhood,
                RoomType = sListing.RoomType,
                Price = sListing.Price,
                MinimumNights = sListing.MinimumNights,
                NumberOfReviews = sListing.NumberOfReviews,
                ReviewsPerMonth = sListing.ReviewsPerMonth,
                BookingsPerMonth = bookingsPerMonth,
                EarningsPerMonth = earningsPerMonth
            };
            return listingWithStats;
        }

        public IEnumerable<MinimalListing> GetAll()
        {
            var listings = _appDbContext.SummaryListings
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

        public IEnumerable<MinimalListing> GetFiltered(Filters filters)
        {
            if (filters.Neighbourhood == "Amsterdam")
            {
                return _appDbContext.SummaryListings
                .Where(l => l.Price < filters.Maxprice)
                .Where(l => l.Price > filters.Minprice)
                .Where(l => l.NumberOfReviews > filters.MinReview)
                .Where(l => l.NumberOfReviews < filters.MaxReview)
                .Select(l => new MinimalListing
                {
                    Latitude = l.Latitude,
                    Longitude = l.Longitude,
                    Name = l.Name,
                    Id = l.Id,
                });
            }

            var listings = _appDbContext.SummaryListings
                .Where(l => l.Neighbourhood == filters.Neighbourhood)
                .Where(l => l.Price < filters.Maxprice)
                .Where(l => l.Price > filters.Minprice)
                .Where(l => l.NumberOfReviews > filters.MinReview)
                .Where(l => l.NumberOfReviews < filters.MaxReview)
                .Select(l => new MinimalListing
                {
                    Latitude = l.Latitude,
                    Longitude = l.Longitude,
                    Name = l.Name,
                    Id = l.Id,
                });

            return listings;
        }

    }
}
