import React from 'react';
import styles from "./SuccessWarn.module.css";
import successIcon from "../assets/imgs/icons8-selecionado.png";
import Button from './Button';


const SuccessWarn = ({message, onClick}) => {
  return (
    <div className={styles["container"]}>
        <div>
            <img src={successIcon} alt={"Success Syboml"}/>
            <p>{message}</p>
        </div>
        <Button textButton={"OK"} width={10} classButton={"btn-secondary"} onClick={onClick}/>
    </div>
  )
}

export default SuccessWarn