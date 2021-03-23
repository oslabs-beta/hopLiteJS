import { HopLiteRuleset} from "../types";
const jwt = require('jsonwebtoken');

class AuthenticationControllerBlueprint {
  authenticate(ruleset: HopLiteRuleset, res:any){
    if (ruleset.cookie) {
      console.log('authentication cookie is working')
      const cookieObj = ruleset.cookie;
      for(let key in cookieObj){
        res.cookie(key,cookieObj[key]);
      }
    }
    if (ruleset.JWT) {
      const JWTObj = ruleset.JWT;
      const header:any = {auth:true};
      let tokenNumber = 1;
      for(let secret in JWTObj){
        let tokenString = 'token';
        //eg. tokenString[0] becomes 'token1'
        tokenString += tokenNumber;
        tokenNumber++;
        //jwt.sign sign and payload
        const token = jwt.sign(JWTObj[secret],secret);
        //eg. header = {auth:true, token1:'something', token2:'something else'}
        header[tokenString] = token;
      }
      console.log(JSON.stringify(header))
      //adding header obj to the header in res obj
      res.set('x-access-token',header)
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
  
  }
 }

export {
  AuthenticationControllerBlueprint
}