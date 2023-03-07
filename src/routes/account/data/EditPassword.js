import React from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Painel from '../../../components/Painel';
import styles from "./MyData.module.css";

const EditPassword = () => {
  const navigate = useNavigate()
  return (
    <div className={styles["container"]}>
      <Painel>
        <h1>Alterar Senha</h1>
        <Input label={"Atual Senha"} password/>
        <Input label={"Nova Senha"} password/>
        <Input label={"Repita Nova Senha"} password/>
        <div className={styles["grid"]}>
          <Button onClick={() => navigate(-1)} textButton={"Cancelar"} classButton={"btn-cancel"}/>
          <Button onClick={() => redirect("/account") }textButton={"Salvar"} classButton={"btn-primary"}/>
        </div>
      </Painel>
    </div>
  )
}

export default EditPassword;