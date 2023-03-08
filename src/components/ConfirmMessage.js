import React from 'react'
import styles from "./ConfirmMessage.module.css"
import Button from './Button'

const ConfirmMessage = ({message, onBack, onConfirm}) => {
  return (
    <div className={styles["container"]}>
        <div>
            <p>{message}</p>
        </div>
        <div className={styles["actions"]}>
            <Button textButton={"Voltar"} width={10} classButton={"btn-secondary"} onClick={onBack}/>
            <Button textButton={"Excluir"} width={10} classButton={"btn-cancel"} onClick={onConfirm}/>
        </div>
    </div>
  )
}

export default ConfirmMessage;