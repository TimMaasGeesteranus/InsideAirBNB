using System;
using System.Collections.Generic;

namespace InsideAirBNB_API.Models
{
    public partial class ListingWithStats
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? HostName { get; set; }
        public string? Neighbourhood { get; set; }
        public string? RoomType { get; set; }
        public int? Price { get; set; }
        public int? MinimumNights { get; set; }
        public int? NumberOfReviews { get; set; }
        public double? ReviewsPerMonth { get; set; }
        public int BookingsPerMonth { get; set; } // Or total, dat is ook een optie
        public int EarningsPerMonth { get; set; }
    }
}
