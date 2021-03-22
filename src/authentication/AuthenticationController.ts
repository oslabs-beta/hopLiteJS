import { SourceMapPayload } from "node:module";
import {  HopLiteUser,HopLiteRuleset} from "../types";
const jwt = require('jsonwebtoken');

//interface for error object
interface errorHandler {
  code: number;
  message: string;
}

// interface payload {
//   username: string;
//   password: string;
//   privilege: boolean;
// }

class AuthenticationControllerBlueprint {
  authenticate(ruleset: HopLiteRuleset, res:any){
    if (ruleset.cookie) {
      const cookieObj = ruleset.cookie;
      for(let key in cookieObj){
        res.cookie(key,cookieObj[key]);
      }
    }
    if (ruleset.JWT) {
      const JWTObj = ruleset.JWT;
      const header:any = {auth:true};
      let tokenNumber = 1;
      for(let key in JWTObj){
        let tokenString = ['token'];
        //eg. tokenString[0] becomes 'token1'
        tokenString[0] += tokenNumber;
        tokenNumber++;
        //jwt.sign sign and payload
        const token = jwt.sign(JWTObj[key],key);
        //eg. header = {auth:true, token1:'something', token2:'something else'}
        header[tokenString[0]] = token;
      }
      //adding header obj to the header in res obj
      res.set(header)
    }
    if (ruleset.cookieJWT) {
      const cookieJWTObj = ruleset.cookieJWT;
      for(let cookieName in cookieJWTObj){
        const allJWTS = cookieJWTObj[cookieName]
        console.log(jwt)
         for(let secret in allJWTS){
           const token = jwt.sign(allJWTS[secret], secret);
           res.cookie(cookieName, token)
        }
      }
    }
      typeof ruleset.message === 'string' ? res.send(ruleset.message) : res.json(ruleset.message);
    //user must do their own res.send ******
  }

  authenticateCookie(ruleset: HopLiteRuleset, res: any) {
    // console.log('authenticate fx is working')
    // if (ruleset.cookie) {
    //   res.cookie(ruleset.createRulesetCookie, 'Admin').send("Cookie Set.");
    // } else {
    //   throw new Error("Cookie not Set.")
    // }
  }
  authenticateJWT(ruleset: HopLiteRuleset, res: any) {
    
    // console.log('JWT is working')
    // if (ruleset.jwt) {
    //   const {payload, secret} = ruleset.jwt
    //   const token = jwt.sign(payload, secret)
    //   console.log(token);
    //   res.status(200).set({ auth: true, token: token })
    // } else {
    //   throw new Error("JWT not Set.")
    // }
  }
  // authenticate(ruleset: HopLiteRuleset, res: any) {
  //   //this method needs to set a cookie AND JWT combination
  //   if (ruleset.cookiejwt) {
  //     const { payload, secret, cookieKey } = ruleset.cookiejwt;
  //     const token = jwt.sign(payload, secret);
  //     console.log("this is our jwt", token);
  //     // console.log(payload)
  //     res.cookie(cookieKey, token).send("Cookie-JWT Set.");
  //   } else {
  //     throw new Error("Cannot set Cookie-JWT.")
  //   }
  // }
 }

export {
  AuthenticationControllerBlueprint
}