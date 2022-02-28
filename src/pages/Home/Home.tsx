import react from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Clique para ir para pagina</h1>
      <Link to="/page">
        clique aqui
      </Link>
    </>
  )
}
