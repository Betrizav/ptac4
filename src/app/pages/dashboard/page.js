import { getUsers } from "@/app/functions/handlerAcessAPI";
import Listar from "@/app/componentes/listar";
import { Suspense } from "react";


export default async function Dashboard() {
   
    const users = getUsers()
    return (
        <div className="containerdash">
        
          <Suspense fallback={<p> carregando... </p>}>
            <div className="card">
            <Listar users={users}/>
            <div className="lugar">
            <button className="botaozinho"><a href="/pages/Alterar">Alterar</a></button>
            <button className="botaozinho"><a href="/pages/Registro">Registrar</a></button>
            </div>
            </div>
          </Suspense>
            
        </div>
    );
};