

// class QueriedUser {
//   const username: string;
//   const password: string;
//   const role: boolean;
//   constructor(username:string, password:string, role:boolean){
//     this.username = username,
//     this.password = password,
//     this.role = role
//   }
// }

// const userLoggingIn = new QueriedUser('john1234','password',false)

class RuleSet {
  
}

interface queriedUserSchema{
  username: string;
  password: string;
  role: boolean;
}



//app.post('/login','querycontroller', (req, res, next){})
interface cookieRuleset {
  duration: number;
  encrypted: boolean;
}

class AuthenticationHelperMethods {


  // const userData = res.locals.user;

  CookieRules(cookieRuleset: cookieRuleset){
    return {

    }
  }
  addJWT(){

  }
  hashing(){

  }
}

export {
  AuthenticationHelperMethods
}