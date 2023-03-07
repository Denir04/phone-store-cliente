import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from "./RegisterCredential.module.css"
import Painel from '../../components/Painel'
import { Link } from 'react-router-dom'

const RegisterCredential = () => {
  return (
    <div className={styles["container"]}>
        <Painel>
            <div>
              <h1>Cadastrar Acesso</h1>
              <Input label={"E-mail"} placeholder={"exemplo@gmail.com"}/>
              <Input label={"Senha"} password={true}/>
              <Input label={"Repitir Senha"} password={true}/>
            </div>
            <div className={styles["grid"]}>
              <Link to={"/register-address"}>
                <Button textButton={"Voltar"} classButton={"btn-secondary"}/>
              </Link>
              <Link to={"/"}>
                <Button textButton={"Cadastrar"} classButton={"btn-primary"}/>
              </Link>
            </div>
        </Painel>
    </div>
  )
}

export default RegisterCredential