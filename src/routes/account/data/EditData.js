import React, { useState } from 'react'
import styles from "./MyData.module.css";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Painel from '../../../components/Painel';
import Select from '../../../components/Select';
import SuccessWarn from '../../../components/SuccessWarn';


const EditData = () => {
  const [changed, setChanged] = useState(false);
  const navigate = useNavigate();

  const selectOptions = [
    {value: "male", text: "Masculino"},
    {value: "female", text: "Feminino"},
    {value: "other", text: "Outro"}
  ]
  
  return !changed ? (
    <div className={styles["container"]}>
      <Painel>
          <h1>Editar Minha Conta</h1>
          <Input label={"Nome Completo"} value={"João da Silva"}/>
          <Input label={"CPF"} value={"456.234.982-02"}/>
          <div className={styles["grid"]}>
            <Input label={"Data Nascimento"} value={"13/09/1992"}/>
            <Select name={"selectedGender"} label={"Gênero"} options={selectOptions} value={selectOptions[0].value}/>
          </div>
          <Input label={"Telefone"} value={"(11)98765-1322"}/>
          <Input label={"E-mail"} value={"joao.silva@hotmail.com"}/>
          <div className={styles["grid"]}>
            <Link to={"/account"}>
              <Button textButton={"Cancelar"} classButton={"btn-cancel"}/>
            </Link>
            <Button textButton={"Salvar"} classButton={"btn-primary"} onClick={() => setChanged(true)}/>
          </div>
      </Painel>
    </div>
  ): (
    <SuccessWarn message={"Dados alterados com sucesso"} onClick={() => navigate(-1)}/>
  )
}

export default EditData;