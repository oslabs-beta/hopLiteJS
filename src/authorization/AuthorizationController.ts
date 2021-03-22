import { AuthorizationHelperMethodsBlueprint } from './AuthorizationHelperMethods';
import * as jwt from 'jsonwebtoken';
import { HopLiteUser, HopLiteRuleset } from "../types";

class AuthorizationControllerBlueprint {
  authorize(ruleset: HopLiteRuleset, req:any){
    let authorize = true;
     //if ruleset is empty or is never inputted, authorize becomes false
    if(arguments.length === 0) authorize = false;
    const objKey = Object.keys(ruleset)
    if(objKey.length === 0) authorize= false; 
      if(ruleset.cookie){
        const savedCookie = ruleset.cookie;
        const currentCookie = req.cookies
        for(let key in savedCookie){
          if(savedCookie[key] !== currentCookie[key]) authorize = false;
        }
      }
      if(ruleset.JWT){
        
      }
      if(ruleset.cookieJWT){
        
      }
    }
  

  authorizeCookie(req: Request, res: Response, next: any) { //these are the methods that the developer using our software invoke
    console.log('authorizeCookie is firing.');
    AuthorizationHelperMethodsBlueprint.hasRole(req, res, next);
  }

  authorizeJWT(secret: string) {
    return function (req: any, res: any, next: any) {
      console.log('authorizeJWT is firing.');
      const token = req.headers['x-access-token'];
      if (token) {
        const verifyJWT = jwt.verify(token, secret)
        return verifyJWT
      }
    }
  }

  // authorize(ruleset: HopLiteRuleset, secret: string) {
  //   return function (req: any, res: any, next: any) {
  //     console.log('authorizeCookieJWT is firing.');
  //     const cookies = req.cookies;
  //     if (cookies[ruleset.cookiejwt.cookieKey]) {
  //       const token = cookies[ruleset.cookiejwt.cookieKey];
  //       //returns decoded token or error message
  //       try {
  //         jwt.verify(token, secret);
  //         next();
  //       } catch {
  //         res.status(403).send("You do not have the required credentials.")
  //       }
  //     }
  //   }
  // }
}

export {
  AuthorizationControllerBlueprint
}