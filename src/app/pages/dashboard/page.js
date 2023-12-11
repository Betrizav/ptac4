import Link from 'next/link'
import { Suspense } from "react";
import { getUsers } from "@/app/functions/handlerAcessAPI";


export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div>
          
           

          <div className="containerdash">
             
             <div className='card'>
                       {users?.map((user, index) => 
                        <p key={index}>
                            <h1 className=''>Usuários</h1>
                            {user.name}
                      
                            <button className="botaozinho1"><a href="/pages/Alterar/id">Alterar</a></button>
                        <button className="botaozinho1"><a href="/pages/Registro">Cadastrar</a></button>
                        </p>
                        )}
                        </div>

            </div>
           
        </div>
       
    );
};