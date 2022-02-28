import react from "react";
import { Link } from "react-router-dom";

export function Page() {
  return (
    <>
      <h1>estamos na pagina</h1>
      <Link to="/">clique para voltar para o menu</Link>
    </>
  )
}
