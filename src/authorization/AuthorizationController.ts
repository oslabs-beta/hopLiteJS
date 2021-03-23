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
        const rulesetJWT= ruleset.JWT;
        const tokens = req.headers['x-access-token'];
        let tokenString = 'token';
        let tokenCount = 1;
        
        if (tokens) {
          for(let secret in rulesetJWT){
            tokenString += tokenCount;
            tokenCount++;
            const rulesetPayload = rulesetJWT[secret];
            const tokenPayload:any = jwt.verify(tokenString,secret);
            
            for(let payloadKey in tokenPayload){
              if(tokenPayload[payloadKey] !== rulesetPayload[payloadKey]) authorize = false;
            }  
          }
        }  
       } else {
         authorize = false;
       }
      
       if(ruleset.cookieJWT){
         const rulesetCookieJWTObj = ruleset.cookieJWT;
         const userCookieJWTObj = req.cookies
         for(let cookieName in rulesetCookieJWTObj){
           const allJWTS = rulesetCookieJWTObj[cookieName]
           for(let secret in allJWTS){
            const rulesetToken = jwt.sign(allJWTS[secret], secret);
            const userToken = userCookieJWTObj[cookieName];
            if(rulesetToken !== userToken) authorize = false;
           }
         }
       }
       if(authorize) next();
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