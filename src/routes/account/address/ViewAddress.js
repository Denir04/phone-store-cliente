import React, { useState } from 'react'
import styles from "../../register/RegisterAddress.module.css"
import Input from "../../../components/Input"
import Select from "../../../components/Select"
import Button from "../../../components/Button"
import Painel from '../../../components/Painel'
import { Link, useNavigate } from 'react-router-dom'
import Checkbox from '../../../components/Checkbox'
import SuccessWarn from '../../../components/SuccessWarn'

const ViewAddress = () => {
  const [changed, setChanged] = useState(false);
  const navigate = useNavigate();

  const selectOptionsResidencia = [
    {value: "casa", text: "Casa"},
    {value: "apartamento", text: "Apartamento"},
    {value: "condominio", text: "Condominio"}
  ]
  const selectOptionsLogradouro = [
    {value: "public", text: "Público"},
    {value: "private", text: "Privado"},
  ]

  const address = {
    indetify: "Minha Casa",
    selectedResident: selectOptionsResidencia[1].value,
    selectedPlace: selectOptionsLogradouro[1].value,
    placeName: "Rua São Tomé de Aquino",
    placeNumber: "172",
    district: "Vila da Prata",
    city: "Mogi das Cruzes",
    state: "São Paulo",
    country: "Brazil",
    cep: "08445-890",
  }

  return !changed ? (
    <div className={styles['container']} style={{marginTop: "20px"}}>
        <Painel width={70}>
            <h1>Endereço Cadastrado</h1>
            <div>
                <div className={`${styles["grid"]}`}>
                    <Input label={"Identificação do endereço (apelido)"} value={address.indetify}/>
                    <Select 
                        name={"selectedResident"} 
                        label={"Tipo de Residência"} 
                        options={selectOptionsResidencia}
                        value={address.selectedResident}
                    />
                </div>
                <div className={`${styles["grid"]}`}>
                    <Select 
                        name={"selectedPlace"} 
                        label={"Tipo Logradouro"} 
                        options={selectOptionsLogradouro}
                        value={address.selectedPlace}
                    />
                    <Input label={"Logradouro"} value={address.placeName}/>
                    <Input label={"Número"} value={address.placeNumber}/>
                </div>
                <div className={`${styles["grid"]}`}>
                    <Input label={"Bairro"} value={address.district}/>
                    <Input label={"Cidade"} value={address.city}/>
                    <Input label={"Estado"} value={address.state}/>
                    <Input label={"País"} value={address.country}/>
                </div>
                <div className={`${styles["grid"]}`}>
                    <Input label={"CEP"} value={address.cep}/>
                    <Input label={"Observações"}/>
                </div>
                <div className={styles["flex"]}>
                  <Checkbox label={"Registrar como endereço residencial"}/>
                  <Checkbox label={"Registrar como endereço de entrega padrão"}/>
                  <Checkbox label={"Registrar como endereço de cobrança padrão"}/>
                </div>
            </div>
            <div className={`${styles["container-actions"]}`}>
                <div className={styles["actions"]}>
                    <Link to={"/account/my-address"}>
                        <Button textButton={"Cancelar"} classButton="btn-cancel"/>
                    </Link>
                    <Button textButton={"Salvar"} classButton="btn-primary" onClick={() => setChanged(true)}/>
                </div>
            </div>
        </Painel>
    </div>
  ) : (
    <SuccessWarn message={"Endereço Alterado com Sucesso"} onClick={() => navigate(-1)}/>
  )
}

export default ViewAddress;