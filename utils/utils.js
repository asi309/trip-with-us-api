const { hotels } = require('../hotels');

module.exports = {
  filterByAmenity: (amenity) => {
    return hotels.filter(
      (hotel) => hotel.amenity.toLowerCase() === amenity.toLowerCase()
    );
  },

  filterByCountry: (country) => {
    return hotels.filter(
      (hotel) => hotel.country.toLowerCase() === country.toLowerCase()
    );
  },

  filterByCategory: (category) => {
    return hotels.filter(
      (hotel) => hotel.category.toLowerCase() === category.toLowerCase()
    );
  },
};
