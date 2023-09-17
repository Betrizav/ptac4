'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const handlerLogin = async (e) => {
        e.preventDefault();
        toast.success('alterado com sucesso')
    }
    return (
        <div className='container'>
           <h1>Alterar dados</h1>

               <form onSubmit={handlerLogin}>

        <input placeholder='nome' type='nome'></input>
        <input placeholder='E-mail' type='email'></input>
        <input placeholder='Senha' type='password'></input>

        <button className='botaozinho'>Entrar</button>
        <button className='botaozinho'><a href="/pages/dashboard">Voltar</a></button>
        </form>
        <ToastContainer/>
        </div>
    )
};
export default Form;