import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const {token, nomeUsuario} = await getUserAuthenticated(user);
    
    const isTokenValidate = await validateToken(token);

    if (isTokenValidate) {
        localStorage.setItem("name", userAuth.name);
        Cookies.set("token", userAuth.token, { expires: 1 });
      }
      return userAuth;
    };
    export default handlerAcessUser;


