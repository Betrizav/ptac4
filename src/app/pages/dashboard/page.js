import { getUsers } from "@/app/functions/handlerAcessAPI";
import Listar from "@/app/componentes/listar";
import { Suspense } from "react";


export default async function Dashboard() {
   
    const users = getUsers()
    return (
        <div>

          <Suspense fallback={<p> carregando pagina... </p>}>
            <Listar users={users}/>
            <button><a href="/pages/alterar">lterar</a></button>
            <button><a href="/pages/registro">Registrar</a></button>
          </Suspense>
            
        </div>
    );
};