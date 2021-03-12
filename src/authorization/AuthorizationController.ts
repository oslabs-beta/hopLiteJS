import { AuthorizationHelperMethodsBlueprint } from './AuthorizationHelperMethods';
import jwt from 'jsonwebtoken';

class AuthorizationControllerBlueprint {
  // testAuthz(str: string) {
  //   console.log(str);
  // }
  authorizeCookie(req: Request, res: Response, next: any) { //these are the methods that the developer using our software invoke
    console.log('authorizeCookie is firing.');
    AuthorizationHelperMethodsBlueprint.hasRole(req, res, next);
  }

  authorizeJWT(secret:string){
    return function(req: any, res: any, next: any){
      console.log('authorizeJWT is firing.');
      const token = req.headers['x-access-token'];
      if(token){
        const verifyJWT =  jwt.verify(token, secret)
        return verifyJWT 
      } 
    }
  }
  
  authorize(secret:string){
    return function(req: any, res: any, next: any) {
      console.log('authorizeCookieJWT is firing.');
      const cookies = req.cookies;
      if(cookies.token){
        const token = cookies.token
        const verifyJWT = jwt.verify(token, secret)
        //returns decoded token or error message
        return verifyJWT;
      }
    }
  }
}

export {
  AuthorizationControllerBlueprint
}