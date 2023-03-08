import React, { useState } from 'react'
import styles from "../../register/RegisterAddress.module.css"
import Input from "../../../components/Input"
import Select from "../../../components/Select"
import Button from "../../../components/Button"
import Painel from '../../../components/Painel'
import { Link, useNavigate } from 'react-router-dom'
import Checkbox from '../../../components/Checkbox'
import SuccessWarn from '../../../components/SuccessWarn'

const RegisterNewAddress = () => {
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

  return !changed ? (
    <div className={styles['container']} style={{marginTop: "20px"}}>
        <Painel width={70}>
            <h1>Registrar Novo Endereço</h1>
            <div>
                <div className={`${styles["grid"]}`}>
                    <Input label={"Identificação do endereço (apelido)"}/>
                    <Select 
                        name={"selectedResident"} 
                        label={"Tipo de Residência"} 
                        options={selectOptionsResidencia}
                    />
                </div>
                <div className={`${styles["grid"]}`}>
                    <Select 
                        name={"selectedPlace"} 
                        label={"Tipo Logradouro"} 
                        options={selectOptionsLogradouro}
                    />
                    <Input label={"Logradouro"}/>
                    <Input label={"Número"}/>
                </div>
                <div className={`${styles["grid"]}`}>
                    <Input label={"Bairro"}/>
                    <Input label={"Cidade"}/>
                    <Input label={"Estado"}/>
                    <Input label={"País"}/>
                </div>
                <div className={`${styles["grid"]}`}>
                    <Input label={"CEP"}/>
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
                    <Button 
                        textButton={"Salvar"} 
                        classButton="btn-primary"
                        onClick={() => setChanged(true)}
                    />
                </div>
            </div>
        </Painel>
    </div>
  ): (
    <SuccessWarn message={"Endereço Cadastrado com Sucesso"} onClick={() => navigate(-1)}/>
  )
}

export default RegisterNewAddress;