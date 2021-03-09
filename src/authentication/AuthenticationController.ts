import { AuthenticationHelperMethods } from './AuthenticationHelperMethods';
//interface for hopliteuser object
interface HopLiteUser {
  username: string;
  password: string;
  role: string; //make sure to refactor code to represent role as a string
  email?: string;
}
/*
stretch feature: change privilege to number (eg. 1-4)
*/


//interface for error object
interface ErrorHandler {
  code: number;
  message: string;
}
interface CookieOptions {
  cookieName: string;
  role?: string;
  duration?: number;
  httpOnly?: boolean;
  samesite?: string;
  secure?: boolean;
}
//interface for ruleset object
interface HopLiteRuleSet {
  cookie : CookieOptions;
  secret: string;
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
  authenticate(hopLiteUser: HopLiteUser, ruleset: HopLiteRuleSet) { //hopLiteuser needs to be an object. Ruleset also needs to be an object. Within the scope typescript, 
  //we need to create interfaces for each of these objects, to appease the typescript gods.
  const { username, role, email } = hopLiteUser;
  const { secret } = ruleset;
  const user = {
    username,
    role,
    email
  }
    const jwt = AuthenticationHelperMethods.createJWT(user, secret);
    /*
    interface JWTPayload {
  username: string;
  role: string;
  email?: string;
}
    
    */
    return function innerfx(req: any, res: any, next:any) {
      console.log('inner fx is running');
      if (ruleset.cookie.cookieName) {
        res.cookie(ruleset.cookie.cookieName, jwt).send("Cookie Set.");
        next();
      } else {
        throw new Error("Cookie not Set.");
      }
      // addCookie();
      // addTWT();
      // hashing();
      // runAll();
    }
  }
  isAuthenticated(hopLiteUser: HopLiteUser) { //
    //checks whether a user is authenticated
    
  }
} 


  // ApiRouter.get('/login', DefaultHoplite.authenticate(user, ruleset), (req, res) {}
  // })

export {
  AuthenticationControllerBlueprint
}
