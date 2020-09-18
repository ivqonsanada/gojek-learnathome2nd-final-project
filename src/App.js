import React from 'react';
import Logo from 'components/logo'
import SearchBar from 'components/search-bar'
import RestaurantList from 'components/restaurant-list'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <SearchBar />
      <RestaurantList />
    </div>
  )
};

export default App;
