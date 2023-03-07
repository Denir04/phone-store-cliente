import React from 'react'
import styles from "./Select.module.css"

const Select = ({label, options, name,value}) => {
  return (
    <div className={styles['container']}>
      <label>{label}</label>
      <select 
        name={name} 
        defaultValue={value?value:"no-identified"} 
      >
        <option key="no-identified" value="no-identified">Não informado</option>
        {options && options.map(option => 
          <option key={option.value} value={option.value}>{option.text}</option>
        )}
      </select>
    </div>
  )
}

export default Select;