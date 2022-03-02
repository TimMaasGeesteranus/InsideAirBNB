﻿using InsideAirBNB_API.Context;
using InsideAirBNB_API.Models;
using InsideAirBNB_API.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InsideAirBNB_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[Authorize]
    public class ListingController : ControllerBase
    {
        private readonly IListingRepository _listingRepository;

        public ListingController(IListingRepository listingRepository)
        {
            _listingRepository = listingRepository;
        }


        [HttpGet("/all")]
        public IActionResult GetAll()
        {
            var listings = _listingRepository.GetAll();
            return Ok(listings);
        }


        [HttpGet("/minimal/{neighbourhood}")]
        public IActionResult GetMinimalInfo(string neighbourhood)
        {
            var listings = _listingRepository.GetMinimalInfoByNeighbourhood(neighbourhood).Take(50);
            //var listings = _listingRepository.GetMinimalInfoByNeighbourhood(neighbourhood);

            return Ok(listings);
        }

        [HttpPost("/filtered")]
        public IActionResult GetFiltered([FromBody] Filters filters)
        {
            var listings = _listingRepository.GetFiltered(filters);
            return Ok(listings);
        }

        [Authorize]
        [HttpGet("/test")]
        public IActionResult GetTest()
        {
            Listing listing = new();
            listing.Description = "A very beatiful place to live";
            listing.Name = "My beatiful house";
            return Ok(listing);
        }

        [HttpGet("{id}")]
        public IActionResult GetAveragesByListingId(string id)
        {
            var listing = _listingRepository.GetListingById(Int32.Parse(id));         
            return Ok(listing);
        }
    }
}
