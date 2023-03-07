import React from 'react'
import styles from "./RegisterAddress.module.css"
import Input from "../../components/Input"
import Select from "../../components/Select"
import Button from "../../components/Button"
import Painel from '../../components/Painel'
import { Link } from 'react-router-dom'
import Checkbox from '../../components/Checkbox'



const RegisterAddress = () => {
  const selectOptionsResidencia = [
    {value: "casa", text: "Casa"},
    {value: "apartamento", text: "Apartamento"},
    {value: "condominio", text: "Condominio"}
  ]
  const selectOptionsLogradouro = [
    {value: "public", text: "Público"},
    {value: "private", text: "Privado"},
  ]

  return (
    <div className={styles['container']}>
        <Painel width={70}>
            <h1>Cadastro Endereço Residencial</h1>
            <div>
                <div className={`${styles["grid"]}`}>
                    <Input label={"Identificação do endereço (apelido)"} />
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
                <Checkbox label={"Registrar endereço residencial como endereço de cobrança e entrega padrão"}/>
            </div>
            <div className={`${styles["container-actions"]}`}>
                <div className={styles["actions"]}>
                    <Link to={"/register"}>
                        <Button textButton={"Voltar"} classButton="btn-secondary"/>
                    </Link>
                    <Link to={"/register-credential"}>
                        <Button textButton={"Continuar"} classButton="btn-primary"/>
                    </Link>
                </div>
            </div>
        </Painel>
    </div>
  )
}

export default RegisterAddress