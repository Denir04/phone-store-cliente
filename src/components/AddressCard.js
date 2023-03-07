import React from 'react'
import styles from "./AddressCard.module.css"
import homeIcon from "../assets/imgs/icons8-casa-64.png"
import { Link } from 'react-router-dom'

const AddressCard = ({identify,resume,resident, delivery, billing}) => {
    const configAddress =[]
    if(resident) configAddress.push(<span key={resident}>Residência</span>);
    if(delivery) configAddress.push(<span key={delivery}>Entrega</span>);
    if(billing) configAddress.push(<span key={billing}>Conbrança</span>);

    return (
    <div className={styles["container"]}>
        <div className={styles["row"]}>
            <img src={homeIcon} alt={"Home Icon"}/>
            <div>
                <h2>{identify}</h2>
                <p>{resume}</p>
            </div>
        </div>
        <div className={styles["row"]}>
            <div>
                {configAddress.map(config => config)}
            </div>
            <div>
                <Link to={"/account/my-address/view"} className={styles["link-view"]}>Visualizar</Link>
                <Link className={styles["link-destroy"]}>Excluir</Link>
            </div>
        </div>
    </div>
  )
}

export default AddressCard;