import React from 'react'
import AddressCard from '../../../components/AddressCard'
import Button from "../../../components/Button"


const MyAddress = () => {
  return (
    <>
      <h1>Meus Endereços</h1>
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
      <Button textButton={"Registrar Novo Endereço"} classButton={"btn-secondary"} width={40}/>
    </>
  )
}

export default MyAddress