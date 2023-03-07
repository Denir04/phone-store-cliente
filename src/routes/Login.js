import React from 'react'
import styles from "./Login.module.css"
import Input from '../components/Input'
import Button from '../components/Button'
import Painel from "../components/Painel"
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <div className={styles["container"]}>
      <Painel width={30}>
        <div>
          <h1>Login</h1>
          <Input label={`E-mail`}/>
          <Input label={`Senha`} password={true}/>  
        </div>
        <div>
          <Button textButton={`Entrar`} classButton={"btn-primary"}/>
          <Link to="/register">
            <Button textButton={`Cadastrar`} classButton={"btn-secondary"}/>
          </Link>
        </div>
        </Painel>
    </div>
  )
}
