import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddressCard from '../../../components/AddressCard'
import Button from "../../../components/Button"
import styles from "../Account.module.css"


const MyAddress = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className={styles["title"]}>Meus Endereços</h1>
      <AddressCard 
        identify={"Minha Casa"} 
        resume={"Rua São Tomé de Aquino, 178, Vila da Prata"} 
        delivery resident
      />
      <AddressCard 
        identify={"Casa de Tia Maria"}
        resume={"Rua Getúlio Vargas, 243, Completo do Salgueiro"}
        billing
      />
      <Button 
        textButton={"Registrar Novo Endereço"} 
        classButton={"btn-secondary"} 
        width={30}
        onClick={() => navigate("/account/my-address/register")}
      />
    </>
  )
}

export default MyAddress