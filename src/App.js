import React, { useState, useEffect } from 'react';
import Logo from 'components/logo'
// import SearchBar from 'components/search-bar'
// import RestaurantList from 'components/restaurant-list'
import styles from './App.module.css'
import { getCities, searchRestaurants } from './api';
import { parseCitySuggestions, parseSearchRestaurants } from './utils';
// import CitySuggestions from './components/cheat-sheets/api-call/city-suggestions';
// import Restaurants from './components/cheat-sheets/api-call/restaurants';
import RestaurantItem from 'components/restaurant-list/restaurant-item';
// import Button from 'components/search-bar/button';
// import TextInput from 'components/search-bar/text-input';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
// import AwesomeDebouncePromise from 'awesome-debounce-promise';

const App = () => {
  loadProgressBar()

  let cityQuery = 'Jakarta';

  const textInput = document.querySelector('input');

  const [searchCity, setSearchCity] = useState('Jakarta');
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const searchRestaurantsFromCity = async () => {
      try {
        const cities = parseCitySuggestions(await getCities(searchCity));

        console.log(cities)

        if (cities.length > 0) {
          const restaurants = parseSearchRestaurants(
            await searchRestaurants(cities[0].id)
          );
          console.log(restaurants)

          setRestaurants(restaurants);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    searchRestaurantsFromCity();
  }, [searchCity]);


  return (
    <div className={styles.container}>
      <Logo />
      {/* <SearchBar /> */}
      {/* <RestaurantList /> */}

      <div className={styles.bodyContainer}>
        {error && <div>Error: {error}</div>}
        <div>
          <div className={styles.searchBarContainer}>
            <div>
              Current City : <input name="firstName" onChange={e => {

                console.log(searchCity)
              }
              } />
            </div>
            <button text="Change City" onClick={e => {
              setSearchCity(textInput.value)
              console.log(cityQuery)
            }} >
              Change City
            </button>
          </div>
        </div>
        {restaurants.length > 0 ? (
          <div className={styles.restaurantsContainer}>
            {restaurants.map(e => (
              <RestaurantItem key={e.id} data={e} />
            ))}
          </div>
        ) : ''}
      </div>
    </div >
  )
};

export default App;
