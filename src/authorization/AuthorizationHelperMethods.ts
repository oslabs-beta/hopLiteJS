import { response } from "express";
import { isJSDocUnknownTag } from "typescript";
const jwt = require('jsonwebtoken');
const err = new Error('Incorrect ownership or insufficient permissions');

class AuthorizationHelperMethodsBlueprint {
  static hasRole(req: any, res: any, next: any) {
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
  bearerToken(req: any, res: any, next: any) {
    
  }
}
export {
  AuthorizationHelperMethodsBlueprint
}
