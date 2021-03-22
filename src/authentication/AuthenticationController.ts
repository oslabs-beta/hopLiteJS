import { HopLiteRuleset} from "../types";
const jwt = require('jsonwebtoken');

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
  
  }
 }

export {
  AuthenticationControllerBlueprint
}
