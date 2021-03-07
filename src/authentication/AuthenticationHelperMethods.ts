

class QueriedUser {
  const username: string;
  const password: string;
  const role: boolean;
  constructor(username:string, password:string, role:boolean){
    this.username = username,
    this.password = password,
    this.role = role
  }
}

// const userLoggingIn = new QueriedUser('john1234','password',false)

class RuleSet {
  
}

interface queriedUserSchema{
  username: string;
  password: string;
  role: boolean;
}



//app.post('/login','querycontroller', (req, res, next){})


class AuthenticationHelperMethods {


  const userData = res.locals.user;

  

}

  addCookie(res: any){
    res.cookie(userData);
    res.send('cCookie Set.');
  }

  addJWT(){

  },

  hashing(){

  }

}

module.export {
  AuthenticationHelperMethods
}