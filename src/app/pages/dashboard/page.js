import { getUsers } from "@/app/functions/handlerAcessAPI";
import Listar from "@/app/componentes/listar";
import { Suspense } from "react";


export default async function Dashboard() {
   
    const users = getUsers()
    return (
        <div>

          <Suspense fallback={<p> carregando... </p>}>
            <Listar users={users}/>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><a href="/pages/Alterar">Alterar</a></button>
            <button><a href="/pages/Registro">Registrar</a></button>
          </Suspense>
            
        </div>
    );
};