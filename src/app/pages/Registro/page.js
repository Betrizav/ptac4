'use client'

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
    
}