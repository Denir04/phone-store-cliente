import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from "./Account.module.css"

const Account = () => {
  return (
    <div className={styles["container"]}>
      <nav>
        <NavLink to={"/account/"} className={({isActive}) => isActive? styles["active"]: {}}>Meus Dados</NavLink>
        <NavLink to={"/account/my-address"} className={({isActive}) => isActive? styles["active"]: {}}>Meus Endereços</NavLink>
        <NavLink to={"/account/my-cards"} className={({isActive}) => isActive? styles["active"]: {}}>Meus Cartões</NavLink>
        <NavLink to={"/account/my-requests"} className={({isActive}) => isActive? styles["active"]: {}}>Meus Pedidos</NavLink>
        <NavLink to={"/account/my-exchanges"} className={({isActive}) => isActive? styles["active"]: {}}>Minhas Trocas</NavLink>
        <NavLink to={"/account/my-tickets"} className={({isActive}) => isActive? styles["active"]: {}}>Meus Cupons</NavLink>
      </nav>
      <section>
        <Outlet/>
      </section>
    </div>
  )
}

export default Account