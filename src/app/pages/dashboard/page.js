import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import List from "@/app/Componentes/List";


export default async function Dashboard() {
   
    const users = getUsers()
    return (
        <div>

          <Suspense fallback={<p> carregando pagina... </p>}>
            <List users={users}/>
            <button><a href="/pages/alterar">lterar</a></button>
            <button><a href="/pages/registro">Registrar</a></button>
          </Suspense>
            
        </div>
    );
};