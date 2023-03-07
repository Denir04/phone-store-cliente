import React from 'react'
import styles from './SearchText.module.css'

export const SearchText = ({placeholder}) => {
  return (
    <input
        className={styles['input']}
        type="text"
        placeholder={placeholder}
    />
  )
}