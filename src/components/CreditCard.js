import React from 'react'
import styles from "./CreditCard.module.css"
import cardIcon from "../assets/imgs/icons8-parte-traseira-de-cartão-de-banco-100.png"

const CreditCard = ({identify, preferencial, onClick}) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["column"]}>
        <img src={cardIcon} alt={"Credit Card Icon"}/>
        <p>Final {identify}</p>
      </div>
      <div className={styles["column"]}>
        <div className={styles["radio"]}>
          <input  
            type={"radio"} 
            value={`card-${identify}`} 
            name={"card_preferencial"}
            defaultChecked={preferencial}
          />
          <label htmlFor='card_preferencial'>Preferencial</label>
        </div>
        <div 
          className={styles["excluir"]}
          onClick={() => onClick(identify)}
        >
            Excluir
        </div>
      </div>
    </div>
  )
}

export default CreditCard;