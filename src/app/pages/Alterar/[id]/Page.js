'use client'

import { getUser } from "@/app/functions/handlerAcessAPI";
import { UpdateUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import { React, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Alter({params}) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const {push} = useRouter()
    
    useEffect(() => {
         const findUser = async () => {
            const userfind = await getUser(params.id);
            setUser({...user, name: userfind.name, email: userfind.email})
          }
          findUser();
    },[])

        const handlerFormSubmit = async (event) => {
            event.preventDefault();
            try {
                await UpdateUser(user, params.id);
                await new Promise((resolve) => {
                    toast.success("Usuário alterado com sucesso!");
                    setTimeout(resolve, 5000);
                    enviado();
                });
                return push("/pages/dashboard");
            } catch {
                return toast.error("Erro");
            }
        };
    
    return (
        <div>
       
        <div className="geral">
           <div className='lugar1'>
            <form method="post" className='' onSubmit={handlerFormSubmit}>

              <h1>Altere um usuário</h1>

                <input type="text"
                 placeholder="Digite seu Nome" 
                 name="nome" className="input"
                  required onChange={(e) => { setUser({ ...user, name: e.target.value }) }}/>


                <input type="email" 
                placeholder="Digite seu E-mail" className="input"
                name="email" required onChange={(e) => { setUser({ ...user, email: e.target.value }) }}/>


                <input type="password"
                 placeholder="Digite uma senha" className="input"
                  name="senha" required onChange={(e) => { setUser({ ...user, password: e.target.value }) }}/> 
                  
                <button className="botaozinho">Alterar</button>         
            </form></div>
            <ToastContainer/>
        </div>
     
        </div>
    );
};