import React from 'react'
import styles from './RegisterDataClient.module.css'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'
import Painel from "../../components/Painel"
import { Link } from 'react-router-dom'

export default function RegisterDataClient(){
  const selectOptions = [
    {value: "male", text: "Masculino"},
    {value: "female", text: "Feminino"},
    {value: "other", text: "Outro"}
  ]

  return (
    <div className={styles["container"]}>
      <Painel>
        <h1>Cadastros Dados Básicos</h1>
        <div className={styles["grid-container"]}>
          <Input label={"Nome Completo"} placeholder={"Nome completo"}/>
          <Input label={"CPF"} placeholder={"CPF"}/>
          <div className={styles["sub-grid"]}>
            <Input label={"Data Nascimento"} placeholder={"Data Nascimento"}/>
            <Select name={"selectedGender"} label={"Gênero"} options={selectOptions}/>
          </div>
          <Input label={"Telefone"} placeholder={"Telefone"}/>
        </div>
        <div className={styles["sub-grid"]}>
          <Link to={"/login"}>
            <Button textButton={"Cancelar"} classButton={"btn-cancel"}/>
          </Link>
          <Link to={"/register-address"}>
            <Button textButton={"Continuar"} classButton={"btn-primary"}/>
          </Link>
        </div>
      </Painel>
    </div>
  )
}
