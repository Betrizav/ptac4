import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const {token, nomeUsuario} = await getUserAuthenticated(user);
    
    const isTokenValidate = await validateToken(token);

    if (isTokenValidate) {
        Cookies.set('token', token, { expires: 1 });
        localStorage.setItem('nomeUsuario', nomeUsuario);
    }
    return {token, nomeUsuario};
}
export default handlerAcessUser;



