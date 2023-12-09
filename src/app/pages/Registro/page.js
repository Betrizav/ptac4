'use client'
import { postUser } from '@/app/functions/handlerAcessAPI';
import { useState } from 'react';
import React from 'react';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: 'Registro usuários',
    description: 'Projeto'
}

export default function RegisterDashboard() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const {push} = useRouter();

    const onSubmitForm = async (event) => {
        event.preventDefault();
        try{
            await postUser(user);
            await new Promisse((resolve) => {
              toast.success("Usuário cadastrado")
              setTimeout(resolve, 5000)
            });
            return push("/pages/dashboard")
        } catch{
            return toast.error("Erro")
      }
     };


     <div className="login_box">
      <h1>Register</h1>

      <form action="" onSubmit={submitForm}>
        <div className="input_box">

          <input type="text" required onChange={(event) => { setUser({ ...user, name: event.target.value })}} />
          <label htmlFor="">nome</label>
        </div>

        <div className="input_box">

          <input type="email" required onChange={(event) => { setUser({ ...user, email: event.target.value })}}/>
          <label htmlFor="">E-mail</label>
        </div>

        <div className="input_box">

          <input type="password" name="pass" id="" required onChange={(event) => { setUser({ ...user, password: event.target.value })}} />
          <label htmlFor="">Senha</label>
        </div>

        <input type="submit" value="Cadastrar" />

};