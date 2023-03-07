import React from 'react'
import styles from './Button.module.css'

export default function Button({textButton,classButton, onClick, width}){
  return (
      <button
        type='button'
        className={`${styles[`button`]} ${styles[classButton]}`}
        onClick={onClick}
        style={width?{width:`${width}vw`}:{}}
      >
        {textButton}
      </button> 
  )
}
