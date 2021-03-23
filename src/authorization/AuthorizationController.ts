import { AuthorizationHelperMethodsBlueprint } from './AuthorizationHelperMethods';
import * as jwt from 'jsonwebtoken';
import { HopLiteUser, HopLiteRuleset } from "../types";

/*
authentication:
app.post('/test', (req,res)=>{authenticate(ruleset)})

app.post('/test',(req,res,next)=>{authorization(ruleset)}, (req,res)=>{
   
   
},

authorization:
app.post('/test',(req,res,next)=>{
   authorization(ruleset,req,next)
   
}, databaseController, databaseController2, (req,res)=>{
  
})
*/

class AuthorizationControllerBlueprint {
  authorize(req: any, res: any, next: any) {
    return function (ruleset: HopLiteRuleset) {
      let authorize = true;
      //if ruleset is empty or is never inputted, authorize becomes false
     if(arguments.length === 0) authorize = false;
     const objKey = Object.keys(ruleset)
     if(objKey.length === 0) authorize= false; 
       if(ruleset.cookie){
         const rulesetCookie = ruleset.cookie;
         const userCookie = req.cookies
         for(let cookieKey in rulesetCookie){
           if(userCookie[cookieKey] !== rulesetCookie[cookieKey]) authorize = false;
         }
       }
       if(ruleset.JWT){
        const tokens = req.headers['x-access-token'];
        if (tokens) {
          for(let individualToken in tokens){
            const verifyToken = jwt.verify()
          }
          const verifyJWT = jwt.verify(token, secret)
          return verifyJWT;
       }
       if(ruleset.cookieJWT){
         
       }
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
        return verifyJWT;
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