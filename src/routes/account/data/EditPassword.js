import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Painel from '../../../components/Painel';
import SuccessWarn from '../../../components/SuccessWarn';
import styles from "./MyData.module.css";

const EditPassword = () => {
  const [changed, setChanged] = useState(false);
  const navigate = useNavigate()
  return !changed ? (
    <div className={styles["container"]}>
      <Painel>
        <h1>Alterar Senha</h1>
        <Input label={"Atual Senha"} password/>
        <Input label={"Nova Senha"} password/>
        <Input label={"Repita Nova Senha"} password/>
        <div className={styles["grid"]}>
          <Button onClick={() => navigate(-1)} textButton={"Cancelar"} classButton={"btn-cancel"}/>
          <Button onClick={() => setChanged(true) }textButton={"Salvar"} classButton={"btn-primary"}/>
        </div>
      </Painel>
    </div>
  ): (
    <SuccessWarn message={"Senha Alterada com Sucesso"} onClick={() => navigate(-1)}/>
  )
}

export default EditPassword;