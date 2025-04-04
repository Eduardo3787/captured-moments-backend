import Jwt from "jsonwebtoken";

export class AuthUtils {
  static generateAccessToken(userId: string): string {
    if (!process.env.ACCESS_TOKEN_SECRET) {
      throw new Error("ACCESS_TOKEN_SECRET not defined!");
    }

    return Jwt.sign(
      { userId },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "72h" }  
    );
  }
}






































//import  Jwt  from "jsonwebtoken"

//export class AuthUtils {
    //static generateAccessToken(userId: string): string {
    // if(!process.env.ACCESS_TOKEN_SECRET) {
      // throw new Error("ACCESS_TOKEN_SECRET not defined!")
     //}

       // return Jwt.sign(
        //  { userId },
         // process.env.ACCESS_TOKEN_SECRET!,
         // { expiresIn: "72" }
      //)
    //}
//}