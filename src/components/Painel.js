import React from 'react'
import styles from "./Painel.module.css"

const Painel = ({children, width}) => {  
  return (
    <div
        style={
          width?{width: `${width}vw`}:{}
        } 
        className={styles["painel"]}
    >
        {children}
    </div>
  )
}

export default Painel