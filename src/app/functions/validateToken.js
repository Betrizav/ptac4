import { jwtVerify } from "jose";
import { decode } from "jsonwebtoken";

const validadeToken = async(token) => {
    const secret = ""
      try{
        const isTokenValidate = await jwtVerify( token, new TextEncoder().encode(secret))
      }
  export { validadeToken };
 

}