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
        <h1>Login</h1>
        <form onSubmit={handler}>
           
        <input placeholder='nome' type='nome'></input>
        <input placeholder='E-mail' type='email'></input>
        <input placeholder='Senha' type='password'></input>

        <button>Entrar</button>
        </form>
        <ToastContainer/>
    </div>
   )
};

export default Form;