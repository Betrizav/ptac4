import { jwtVerify } from "jose";
import { decode } from "jsonwebtoken";

const validadeToken = async(token) => {
    const secret = "jfdghdjhggiiweoriobiazinhaaaaa"
      try{
        const isTokenValidate = await jwtVerify( token, 
          new TextEncoder().encode(secret));
          if (isTokenValidate) {
            return true;
          }
      } catch{
        return false;
      }
    }
  
    export { validadeToken };


