﻿using InsideAirBNB_API.Context;
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
            SummaryListing listing = _appDbContext.SummaryListings.FirstOrDefault(l => l.Id == id);
            ListingWithStats listingWithStats = new ListingWithStats
            {
                Id = listing.Id,
                Name = listing.Name,
                HostName = listing.HostName,
                Neighbourhood = listing.Neighbourhood,
                RoomType = listing.RoomType,
                Price = listing.Price,
                MinimumNights = listing.MinimumNights,
                NumberOfReviews = listing.NumberOfReviews,
                ReviewsPerMonth = listing.ReviewsPerMonth,
                BookingsPerMonth = 36,
                EarningsPerMonth = 12
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
