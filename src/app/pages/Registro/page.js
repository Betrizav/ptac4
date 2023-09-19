'use client'

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const handlerLogin = async (e) => {
        e.preventDefault();
        toast.success('registrado com sucesso')
    }
   return (
    <div className="containerdash">

        <h1 className="novo">Novo Registro</h1>

        <form onSubmit={handlerLogin}>
           
        <input placeholder='nome' type='nome' className="input"></input>
        <input placeholder='E-mail' type='email' className="input"></input>
        <input placeholder='Senha' type='password' className="input"></input>
       <div className="lugar1">
        <button className="botaozinho1"><a href="/pages/dashboard">Entrar</a></button>
        <button className="botaozinho1"><a href="/pages/dashboard">Voltar</a></button>
        </div>
        </form>
        <ToastContainer/>
    </div>
   )
};

export default Form;