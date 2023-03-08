import React, {useState} from 'react';
import CreditCard from '../../../components/CreditCard';
import Button from "../../../components/Button";
import styles from "../Account.module.css"
import { useNavigate } from 'react-router-dom';
import ConfirmMessage from '../../../components/ConfirmMessage';
import SuccessWarn from "../../../components/SuccessWarn";


const MyCards = () => {
  const [wantDestroy, setWantDestroy] = useState(null);
  const [changed, setChanged] = useState(false);
  
  const navigate = useNavigate();
  const creditCard = [
    {identify: "0714", preferencial: true},
    {identify: "1843", preferencial: false}, 
  ]

  const showConfirmMessage = function(identify){
    setWantDestroy(identify)
  }

  const creditCardDisplay = creditCard.map(card => (
    <CreditCard 
      key={card.identify} 
      identify={card.identify} 
      preferencial={card.preferencial}
      onClick={showConfirmMessage}
    />
  ))

  return !wantDestroy ? (
    <>
      <h1 className={styles["title"]}>Meus Cartões</h1>
      <div>
        {creditCardDisplay}
      </div>
      <Button 
        textButton={"Registrar Novo Cartão"} 
        classButton={"btn-secondary"} 
        width={"30"}
        onClick={() => navigate("/account/my-cards/register")}
      />
    </>
  ) : !changed ?(
    <ConfirmMessage 
      message={`Você realmente deseja excluir o ${wantDestroy}`}
      onBack={() => setWantDestroy(false)}
      onConfirm={() => setChanged(true)}
    />
  ) : (
    <SuccessWarn message={"Cartão Excluido com sucesso"} onClick={() => {setChanged(false); setWantDestroy(false)}}/>
  )
}

export default MyCards;