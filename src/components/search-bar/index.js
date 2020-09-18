import React from 'react'
import TextInput from './text-input'
import Button from './button'
import styles from './SearchBar.module.css'

const SearchBar = () => {

    return (
        <div className={styles.container}>
            <TextInput />
            <Button />
        </div>
    )
}


export default SearchBar;