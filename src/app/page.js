'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.console.error("Email ou senha incorretos");
      }
      push('/pages/dashboard');
    } catch {
      refresh();
    }
  }
  return (
    <body>
    <div class="containerdash">
      <form onSubmit={handlerLogin}>

        <h1 className="novo">Login</h1>

        <input
          placeholder='E-mail'
          type="email" className="input"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password' className="input"
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <div className="lugar1">
        <button className="botaozinho1"><a href="/pages/dashboard">Entrar</a></button>
        </div>
      </form>
      <ToastContainer/>
    </div>
    </body>
  );
}
