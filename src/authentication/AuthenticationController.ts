// import AuthenticationHelperMethods from 'AuthenticationHelperMethods';

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
  authenticate(hopLiteUser: hopLiteUser, ruleset: hopLiteRuleSet) { //hopLiteuser needs to be an object. Ruleset also needs to be an object. Within the scope typescript, 
  //we need to create interfaces for each of these objects, to appease the typescript gods.
  //  userLoggingIn.username
    console.log('authenticate fx is working')
    // console.log('hoplite user:', hopLiteUser)
    // console.log('ruleset:', ruleset)
      return function innerfx(req: any, res: any, next:any) {
      console.log('inner fx is running')
      if (ruleset.cookie) {
        res.cookie('role', 'Admin').send("Cookie Set.");
        next()
      } else {
        throw new Error("Cookie not Set.")
        next();
      }
      // addCookie();
      // addTWT();
      // hashing();
      // runAll();
    }
  }
} 


  // ApiRouter.get('/login', DefaultHoplite.authenticate(user, ruleset), (req, res) {}
  // })

export {
  AuthenticationControllerBlueprint
}
