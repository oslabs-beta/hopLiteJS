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
  authorize(ruleset: HopLiteRuleset, req:any, next:any) {
    
      let authorize = true;
      //if ruleset is empty or is never inputted, authorize becomes false
      if(arguments.length === 0) authorize = false;
      const objKey = Object.keys(ruleset)
      if(objKey.length === 0) authorize= false; 
      console.log(authorize)
      if(ruleset.cookie){
        console.log('it is firing on ruleset.cookie booha')
        console.log(req.cookies)
        console.log(ruleset.cookie)
         const rulesetCookie = ruleset.cookie;
         const userCookie = req.cookies
         
            for(let cookieKey in rulesetCookie){
              if(userCookie[cookieKey] !== rulesetCookie[cookieKey]) authorize = false;
             }
      }
      if(ruleset.JWT){
        console.log('ruleset.JWT is firing')
        const rulesetJWT= ruleset.JWT;
        const tokens = req.headers['x-access-token'];
        console.log(req.headers)
        console.log(JSON.stringify(tokens))
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
      } 
              
    if(ruleset.cookieJWT){
      console.log('ruleset.cookieJWT is firing')
       //rulesetCookieJWTObj: {cookieName:{secret:payload}}
       const rulesetCookieJWTObj = ruleset.cookieJWT;
      //userCookieJWTObj{cookieName:JWT}
      const userCookieJWTObj = req.cookies
      for(let cookieName in rulesetCookieJWTObj){
        const allJWTS = rulesetCookieJWTObj[cookieName]
        for(let secret in allJWTS){
          const userPayload = jwt.verify(userCookieJWTObj[cookieName],secret);
          if(JSON.stringify(userPayload) !== JSON.stringify(allJWTS[secret])) authorize = false;
           }
      }
      }
      if(authorize) next()
      else console.log('authz does not work')
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
// class AuthorizationControllerBlueprint {
//   authorize(req: any, res: any, next: any) {
//      return function (ruleset: HopLiteRuleset) {
//       let authorize = true;
//       //if ruleset is empty or is never inputted, authorize becomes false
//       if(arguments.length === 0) authorize = false;
//       const objKey = Object.keys(ruleset)
//       if(objKey.length === 0) authorize= false; 

//        if(ruleset.cookie){
//          console.log('it is firing on ruleset.cookie')
//          const rulesetCookie = ruleset.cookie;
//          const userCookie = req.cookies
//          for(let cookieKey in rulesetCookie){
//            if(userCookie[cookieKey] !== rulesetCookie[cookieKey]) authorize = false;
//          }
//        }

//        if(ruleset.JWT){
//         const rulesetJWT= ruleset.JWT;
//         const tokens = req.headers['x-access-token'];
//         let tokenString = 'token';
//         let tokenCount = 1;
        
//         if (tokens) {
//           for(let secret in rulesetJWT){
//             tokenString += tokenCount;
//             tokenCount++;
//             const rulesetPayload = rulesetJWT[secret];
//             const tokenPayload:any = jwt.verify(tokenString,secret);
            
//             for(let payloadKey in tokenPayload){
//               if(tokenPayload[payloadKey] !== rulesetPayload[payloadKey]) authorize = false;
//             }  
//           }
//         }  
//        } else {
//          authorize = false;
//        }
      
//        if(ruleset.cookieJWT){
//          const rulesetCookieJWTObj = ruleset.cookieJWT;
//          const userCookieJWTObj = req.cookies
//          for(let cookieName in rulesetCookieJWTObj){
//            const allJWTS = rulesetCookieJWTObj[cookieName]
//            for(let secret in allJWTS){
//             const rulesetToken = jwt.sign(allJWTS[secret], secret);
//             const userToken = userCookieJWTObj[cookieName];
//             if(rulesetToken !== userToken) authorize = false;
//            }
//          }
//        }
//        if(authorize) next()
//        else console.log('authz does not work')
//     }
//     // innerAuthorize(Ruleset: any);
//   }
  
  

  // authorizeCookie(req: Request, res: Response, next: any) { //these are the methods that the developer using our software invoke
  //   console.log('authorizeCookie is firing.');
  //   AuthorizationHelperMethodsBlueprint.hasRole(req, res, next);
  // }

  // authorizeJWT(secret: string) {
  //   return function (req: any, res: any, next: any) {
      
  //     console.log('authorizeJWT is firing.');
  //     const token = req.headers['x-access-token'];
  //     if (token) {
  //       const verifyJWT = jwt.verify(token, secret)
  //       return verifyJWT;
  //     }
  //   }
  // }

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
// }

export {
  AuthorizationControllerBlueprint
}