import { jwtVerify } from "jose";
import { decode } from "jsonwebtoken";

const validadeToken = async(token) => {
    const secret = "jfdghdjhggiiweoriobiazinhaaaaa"
      try{
        const isTokenValidate = await decode( token) 
          if (isTokenValidate) {
            return true;
          }
      } catch{
        return false;
      }
    }
  
    export { validadeToken };


