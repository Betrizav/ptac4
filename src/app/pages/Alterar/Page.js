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

        <input placeholder='nome' type='nome' className='input'></input>
        <input placeholder='E-mail' type='email' className='input'></input>
        <input placeholder='Senha' type='password' className='input'></input>

        <button class='botaozinho'>Entrar</button>
        </form>
        <ToastContainer/>
        </div>
    )
};
export default Form;