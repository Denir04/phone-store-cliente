import React from 'react'
import styles from './Input.module.css'

export default function Input({placeholder, label, password, value, readOnly}){
  return (
    <div className={styles['container']}>
        <label>{label}</label>
        <input
          type={password ? "password" : "text"}
          placeholder={placeholder}
          defaultValue={value}
          readOnly={readOnly}
        />
    </div>
  )
}
