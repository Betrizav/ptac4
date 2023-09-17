import { getUsers } from "@/app/functions/handlerAcessAPI";
import Listar from "@/app/componentes/listar";
import { Suspense } from "react";


export default async function Dashboard() {
   
    const users = getUsers()
    return (
        <div className="container">

          <Suspense fallback={<p> carregando... </p>}>
            <Listar users={users}/>
            <button className="botaozinho"><a href="/pages/Alterar">Alterar</a></button>
            <button className="botaozinho"><a href="/pages/Registro">Registrar</a></button>
          </Suspense>
            
        </div>
    );
};