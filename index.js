const { resolve } = require('node:path');

const express = require('express');

const { hotels } = require('./hotels');
const {
  filterByAmenity,
  filterByCountry,
  filterByCategory,
} = require('./utils/utils');

const app = express();
const port = 3000;

app.get('/hotels/sort/pricing', (req, res) => {
  const { pricing } = req.query;

  if (pricing === 'low-to-high') {
    return res.json({
      hotels: hotels.sort((a, b) => a.price - b.price),
    });
  } else if (pricing === 'high-to-low') {
    return res.json({
      hotels: hotels.sort((a, b) => b.price - a.price),
    });
  }
});

app.get('/hotels/sort/rating', (req, res) => {
  const { rating } = req.query;

  if (rating === 'low-to-high') {
    return res.json({
      hotels: hotels.sort((a, b) => a.rating - b.rating),
    });
  } else if (rating === 'high-to-low') {
    return res.json({
      hotels: hotels.sort((a, b) => b.rating - a.rating),
    });
  }
});

app.get('/hotels/sort/reviews', (req, res) => {
  const { reviews } = req.query;

  if (reviews === 'least-to-most') {
    return res.json({
      hotels: hotels.sort((a, b) => a.reviews - b.reviews),
    });
  } else if (reviews === 'most-to-least') {
    return res.json({
      hotels: hotels.sort((a, b) => b.reviews - a.reviews),
    });
  }
});

app.get('/hotels/filter/amenity', (req, res) => {
  const { amenity } = req.query;

  return res.json({
    hotels: filterByAmenity(amenity),
  });
});

app.get('/hotels/filter/country', (req, res) => {
  const { country } = req.query;

  return res.json({
    hotels: filterByCountry(country),
  });
});

app.get('/hotels/filter/category', (req, res) => {
  const { category } = req.query;

  return res.json({
    hotels: filterByCategory(category),
  });
});

app.get('/hotels', (req, res) => {
  return res.json({
    hotels,
  });
});

app.listen(port, () => {
  console.log(`TripWithUs API listening at http://localhost:${port}`);
});
