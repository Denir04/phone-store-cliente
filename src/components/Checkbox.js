import React from 'react'
import styles from "./Checkbox.module.css"

const Checkbox = ({label}) => {
  return (
    <div className={styles["container"]}>
        <input
            type={"checkbox"}
            name={"residentDefault"}
        />
        <label htmlFor='residentDefault'>{label}</label>
    </div>
  )
}

export default Checkbox