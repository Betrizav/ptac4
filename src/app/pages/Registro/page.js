'use client'

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const handlerLogin = async (e) => {
        e.preventDefault();
        toast.success('registrado com sucesso')
    }
   return (
    <div>
        
        <h1>Novo Registro</h1>

        <form onSubmit={handlerLogin}>
           
        <input placeholder='nome' type='nome'></input>
        <input placeholder='E-mail' type='email'></input>
        <input placeholder='Senha' type='password'></input>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" ><a href="/pages/dashboard">Entrar</a></button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><a href="/pages/dashboard">Voltar</a></button>
        </form>
        <ToastContainer/>
    </div>
   )
};

export default Form;