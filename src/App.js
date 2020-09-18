import React from 'react';
import Logo from 'components/logo'
import SearchBar from 'components/search-bar'
import FoodList from 'components/food-list'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <SearchBar />
      <FoodList />
    </div>
  )
};

export default App;
