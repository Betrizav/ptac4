import Link from 'next/link'
import { Suspense } from "react";
import { getUsers } from "@/app/functions/handlerAcessAPI";


export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div>
          
           

            <div className="containerdash">
            <Suspense fallback= {<p> carregando...</p>}>
                {users.map(user => (
                    <div className="card"  key={user.id}>
                        <Link href={`/pages/alter/${user.id}`}>
                        <h1  className="usua">{user.name}</h1>
                        <p className='text-lg mt-2 mb-4'> {user.email}</p>
                        </Link>
                    </div>
                ))}
            </Suspense>
            </div>
           
        </div>
       
    );
};