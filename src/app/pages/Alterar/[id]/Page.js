'use client'
import handlerAcessUser from '@/app/functions/handlerAcess';
import { updateUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: 'alterar user',
    description: 'projeto de ptac'
}

export default function AlterarDashboard({ params }) {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { push } = useRouter();

    useEffect(() => {
        const findUser = async () => {
            const userfind = await getUser(params.id)
            setUser({ ...user, name: userfind.name, email: userfind, email });
        }
        findUser();
    }, [])

    const handlerFormSubmit = async (event) => {
        event.preventDefault();
        try{
        toast.success("usuário alterado com sucesso");
        await updateUser(user, params.id);
        return push("/pages/dashboard");
        } catch{
            
        }
    }


    return (
        <div className='containerdash'>
            <h1 className='altera'>Alterar dados</h1>

            <form onSubmit={handlerFormSubmit}>

                <input placeholder='nome' type='nome' className='input'></input>
                <input placeholder='E-mail' type='email' className='input'></input>
                <input placeholder='Senha' type='password' className='input'></input>
                <div className="lugar1">
                    <button class='botaozinho1'><a href="/pages/dashboard">Entrar</a></button>
                    <button className='botaozinho'><a href='/pages/dashboard'>Voltar</a></button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}