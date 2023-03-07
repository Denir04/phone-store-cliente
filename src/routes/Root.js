import React from 'react'
import styles from "./Root.module.css"
import { Link, Outlet } from 'react-router-dom'
import { SearchText } from '../components/SearchText'
import perfilIcon from "../assets/imgs/icons8-usuário-64.png";


export default function Root(){
  return (
    <div className={styles["container"]}>
      <header>
        <Link to={`/`} className={styles['logo']}><span>Phone</span>Store</Link>
        <SearchText placeholder={"Buscar Texto"}/>
        <Link to={`login`}>Entrar</Link>
        <Link to={`account`}>
          <img className={styles['perfil']} src={perfilIcon} alt='Perfil'/>
        </Link>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
      </footer>
    </div>
  )
}
