namespace InsideAirBNB_API.Models
{
    public class MinimalListing
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? HostName { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }
    }
}
