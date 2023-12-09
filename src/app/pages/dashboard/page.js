import { getUsers } from "@/app/functions/handlerAcessAPI";
import Listar from "../../componentes/Listar"
import { Suspense } from "react";


export default async function Dashboard() {
   
    const users = await getUsers()
    return (
        <div className="containerdash">
        
          <Suspense fallback={<p> carregando... </p>}>
            <div className="card">
              <h2 className="usua">Usuários</h2>
            <Listar users={users}/>
            <div className="lugar">
            <button className="botaozinho"><a href="/pages/Registro">Registrar</a></button>
            <button className="Alter"><a href="/pages/Alterar">Alterar</a></button>
            </div>
            </div>
          </Suspense>
            
        </div>
    );
};