import { getUsers } from "@/app/functions/handlerAcessAPI";
import users from "@/app/componentes/users";
import { Suspense } from "react";


export default async function Dashboard() {
   
    const users = getUsers()
    return (
        <div className="containerdash">
        
          <Suspense fallback={<p> carregando... </p>}>
            <div className="card">
              <h2 className="usua">Usuários</h2>
            <Listar users={users}/>
            <div className="lugar">
            <button className="botaozinho"><a href="/pages/Registro">Registrar</a></button>
            </div>
            </div>
          </Suspense>
            
        </div>
    );
};