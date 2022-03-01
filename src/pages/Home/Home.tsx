import react from "react";
import { Link } from "react-router-dom";

import '../Home/Home.scss'

export const Home = () => {
  return (
    <div className="home-page" >
      <h1>Clique para ir para pagina</h1>
      <Link to="/page">
        clique aqui
      </Link>
    </div>
  )
}
