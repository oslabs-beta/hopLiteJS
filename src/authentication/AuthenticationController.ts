const jwt = require('jsonwebtoken');
//interface for hopliteuser object
interface hopLiteUser {
  username: string;
  password: string;
  privilege: boolean;
}
/*
stretch feature: change privilege to number (eg. 1-4)
*/


//interface for error object
interface errorHandler {
  code: number;
  message: string;
}

//interface for ruleset object
interface hopLiteRuleSet {
  cookie : boolean;
  jwt? : boolean;
  bcrypt? : boolean;
  salting? : number;
  argon? : boolean;
  bearerToken? : boolean;
  securityKey? : boolean;
  Oauth?: boolean;
  mfa? : boolean;
  digest?: boolean;
  apiKey?: boolean;
  awsSignature?: boolean;
  ntlm?: boolean;
  akamai?: boolean;
  hawk?: boolean;
 
}


class AuthenticationControllerBlueprint {
  testAuthn(str: string) {
    console.log(str);
  }
  /*TEDS COMMENT: how should we do this part? for in loop? eg. ruleset = {authenticateCookie: true, authenticateJWT: false}
    for(let key in ruleset){
      if(ruleset[key]) key();
    }
  */
  
  ruleset(ruleset: hopLiteRuleSet){
    for(let key in ruleset){
      if(ruleset[key:]) key();
    }
  }
  
  authenticateCookie(hopLiteUser: hopLiteUser, ruleset: hopLiteRuleSet) { //hopLiteuser needs to be an object. Ruleset also needs to be an object. Within the scope typescript, 
  //we need to create interfaces for each of these objects, to appease the typescript gods.
  //  userLoggingIn.username
    console.log('authenticate fx is working')
    // console.log('hoplite user:', hopLiteUser)
    // console.log('ruleset:', ruleset)
      return function(req: any, res: any, next:any) {
      console.log('inner fx is running')
      if (ruleset.cookie) {
        res.cookie('role', 'Admin').send("Cookie Set.");
        next()
      } else {
        throw new Error("Cookie not Set.")
        next();
      }
    } 
  }
  authenticateJWT(queriedId: string, secret: string, ruleset: hopLiteRuleSet){
    console.log('JWT is working')
    return function(req: any, res: any, next:any) {
      console.log('inner function is sucessful')
      if (ruleset.jwt) {
        const token = jwt.sign(queriedId,secret)
        res.status(200).set({auth: true, token: token})
        next()
      } else {
        throw new Error("JWT not Set.")
        next();
      }
  }
} 




export {
  AuthenticationControllerBlueprint
}
