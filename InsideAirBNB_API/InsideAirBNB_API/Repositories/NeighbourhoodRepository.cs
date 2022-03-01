using InsideAirBNB_API.Context;
using InsideAirBNB_API.Repositories.Interfaces;

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
    }
}
