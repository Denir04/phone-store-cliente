import React, { useState } from 'react';
import styles from "./RegisterCard.module.css";
import Painel from "../../../components/Painel";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import SuccessWarn from '../../../components/SuccessWarn';

const RegisterCard = () => {
  const [changed, setChanged] = useState(false);
  const navigate = useNavigate();

  const flagOption = [
    {value: "visa", text: "Visa"},
    {value: "mastercard", text: "Mastercard"},
    {value: "elo", text: "Elo"},
    {value: "american", text: "American Express"},
  ]

  return !changed ? (
      <div className={styles["container"]}>
        <Painel>
        <h1>Novo Cartão</h1>
        <Input label={"Número do Cartão"}/>
        <Input label={"Nome Impresso"}/>
        <Select label={"Bandeira"} options={flagOption} name={"flagSelected"}/>
        <Input label={"Código de Segurança"}/>
        <div className={styles["grid"]}>
          <Button textButton={"Cancelar"} classButton={"btn-cancel"} onClick={() => navigate(-1)}/>
          <Button textButton={"Registrar Cartão"} classButton={"btn-primary"} onClick={() => setChanged(true)}/>
        </div>
        </Painel>
      </div>
    ) : (
      <SuccessWarn message={"Novo Cartão Registrado Com Sucesso"} onClick={() => navigate(-1)}/>
    )
}

export default RegisterCard;