import React from 'react'
import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import Painel from '../../../components/Painel';
//import Select from '../../components/Select';
import styles from "./MyData.module.css";

const MyData = () => {
  /*const selectOptions = [
    {value: "male", text: "Masculino"},
    {value: "female", text: "Feminino"},
    {value: "other", text: "Outro"}
  ]*/
  
  return (
    <div className={styles["container"]}>
      <Painel>
          <h1>Meus Dados</h1>
          <div className={styles["edit-line"]}>
            <p>Informações Conta</p>
            <Link to={"/account/edit"}>Editar</Link>
          </div>
          <Input label={"Nome Completo"} value={"João da Silva"} readOnly/>
          <Input label={"CPF"} value={"456.234.982-02"} readOnly/>
          <div className={styles["grid"]}>
            <Input label={"Data Nascimento"} value={"13/09/1992"} readOnly/>
            <Input label={"Gênero"} value={"Masculino"} readOnly/>
          </div>
          <Input label={"Telefone"} value={"(11)98765-1322"} readOnly/>
          <Input label={"E-mail"} value={"joao.silva@hotmail.com"} readOnly/>
          <Link to={"/account/edit-password"}>Alterar Senha</Link>
      </Painel>
    </div>
  )
}

export default MyData;