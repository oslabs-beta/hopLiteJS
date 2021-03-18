import { SourceMapPayload } from "node:module";

const jwt = require('jsonwebtoken');
//interface for hopliteuser object
interface hopLiteUser {
  username: string;
  password: string;
  privilege: boolean;
}

//interface for error object
interface errorHandler {
  code: number;
  message: string;
}

//interface for ruleset object
interface hopLiteRuleSet {
  cookiejwt: boolean;
  cookie? : boolean;
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

interface payload {
  username: string;
  password: string;
  privilege: boolean;
}

class AuthenticationControllerBlueprint {

  /*TEDS COMMENT: how should we do this part? for in loop? eg. ruleset = {authenticateCookie: true, authenticateJWT: false}
    for(let key in ruleset){
      if(ruleset[key]) key();
    }
  */

  authenticateCookie(hopLiteUser: hopLiteUser, ruleset: hopLiteRuleSet, res: any) { 
    console.log('authenticate fx is working')
      if (ruleset.cookie) {
        res.cookie('role', 'Admin').send("Cookie Set.");
      } else {
        throw new Error("Cookie not Set.")
      }
  }

  authenticateJWT(payload: payload, secret: string, ruleset: hopLiteRuleSet, res: any){
    console.log('JWT is working')
    if (ruleset.jwt) {
      const token = jwt.sign(payload,secret)
      console.log(token);
      res.status(200).set({auth: true, token: token})
    } else {
      throw new Error("JWT not Set.")
    }
  }

  authenticate(hopLiteUser: hopLiteUser, ruleset: hopLiteRuleSet, payload: payload, secret: string, res: any) {
    //this method needs to set a cookie AND JWT combination
    if(ruleset.cookiejwt){
      const token = jwt.sign(payload,secret);
      console.log("this is our jwt", token);
      res.cookie('token',token).send("Cookie-JWT Set.");
    } else {
      throw new Error("Cannot set Cookie-JWT.")
    }
  }

  // authenticate(hopLiteUser: hopLiteUser, ruleset: hopLiteRuleSet, payload: payload, secret: string, res: any) {
  //   //this method needs to set a cookie AND JWT combination
  //   if(ruleset.cookiejwt){
  //     const token = jwt.sign(payload,secret);
  //     res.cookie('token',token).send("Cookie-JWT Set.");
  //   } else {
  //     throw new Error("Cannot set Cookie-JWT.")
  //   }
    //a JWT needs to take in whatever a developer needs
    //we need a userObject to create a jwt
    //ruleset should only reflect that we need a cookie//jwt combo
    //can we get a secret, and the queriedID from the same data type?
    //if you only need res, how do you receive res in the authenticate method?
  }
}

    //a JWT needs to take in whatever a developer needs
    //we need a userObject to create a jwt
    //ruleset should only reflect that we need a cookie//jwt combo
    //can we get a secret, and the queriedID from the same data type?
    //if you only need res, how do you receive res in the authenticate method?
  }
}

export {
  AuthenticationControllerBlueprint
}


