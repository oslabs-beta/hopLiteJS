import { response } from "express";
import { isJSDocUnknownTag } from "typescript";
const jwt = require('jsonwebtoken');
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

//user needs to import secret from config.secret
async hasCorrectToken(req: any, res: any, next: any) {
  console.log('hasCorrectToken is firing.');
  const token = req.headers['x-access-token'];
    if(token){
      try{
        const verifyJWT = await jwt.verify(token, secret)
        res.locals.decoded = verifyJWT
      }
      catch (error) {
        console.log(error)
      }
  }

const AuthorizationHelperMethods = new AuthorizationHelperMethodsBlueprint();

export {
  AuthorizationHelperMethods
}