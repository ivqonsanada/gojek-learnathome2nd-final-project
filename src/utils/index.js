
export const parseCitySuggestions = e =>
  e.data.location_suggestions.map(e => {
    const { id, name } = e;
    return { id, name };
  });

export const parseSearchRestaurants = e =>
  e.data.restaurants.map(data => {
    const {
      id,
      name,
      thumb: picture,
      cuisines,
      price_range: priceRange,
      user_rating: { aggregate_rating: rating }
    } = data.restaurant;
    return { id, name, picture, cuisines, priceRange, rating };
  });