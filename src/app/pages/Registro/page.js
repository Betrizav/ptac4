'use client'


import { postUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Alter({params}) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const {push} = useRouter()
       
        
        const handlerFormSubmit = async (event) => {
            event.preventDefault();
            try {
                await postUser(user);
                await new Promise((resolve) => {
                    toast.success("Usuário cadastrado com sucesso!");
                    setTimeout(resolve, 5000);
                
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

              <h1>Cadastre um Usuário</h1>

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
                  
                <button className="botaozinho"><a href="pages/dashboard"></a>Enviar</button>         
            </form></div>
            <ToastContainer/>
        </div>
        </div>
    );
};