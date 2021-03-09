// req.cookie.role === "admin"
// const {};
// const { Request, Response } = require('@types/express');
// we need to require a cookie parser
// we need to have user install a cookie parser

// interface cookie {role: string = "admin"}

const err = new Error('Incorrect ownership or insufficient permissions');

class AuthorizationHelperMethodsBlueprint {
  hasRole(req: any, res: any, next: any) {
    console.log("HasRole is firing.");
    const cookies = req.cookies;
      if(cookies.role === 'Admin'){
        console.log(cookies.role)
        next()
      } 
      else {
        console.log('it did not work')
        throw err;
        res.status(403).send('Authorized');
      }
  }
}

const AuthorizationHelperMethods = new AuthorizationHelperMethodsBlueprint();

export {
  AuthorizationHelperMethods
}