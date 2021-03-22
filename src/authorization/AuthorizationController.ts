import { AuthorizationHelperMethodsBlueprint } from './AuthorizationHelperMethods';
import * as jwt from 'jsonwebtoken';
import { HopLiteUser, HopLiteRuleset } from "../types";

class AuthorizationControllerBlueprint {
  // testAuthz(str: string) {
  //   console.log(str);
  // }

  // authorizeCookie(req: Request, res: Response, next: any) { //these are the methods that the developer using our software invoke
  //   console.log('authorizeCookie is firing.');
  //   AuthorizationHelperMethodsBlueprint.hasRole(req, res, next);
  // }

  // authorizeJWT(secret: string) {
  //   return function (req: any, res: any, next: any) {
  //     console.log('authorizeJWT is firing.');
  //     const token = req.headers['x-access-token'];
  //     if (token) {
  //       const verifyJWT = jwt.verify(token, secret)
  //       return verifyJWT
  //     }
  //   }
  // }

  // authorize(ruleset: HopLiteRuleset, secret: string) {
  //   return function (req: any, res: any, next: any) {
  //     console.log('authorizeCookieJWT is firing.');
  //     const cookies = req.cookies;
  //     if (cookies[ruleset.cookiejwt.cookieKey]) {
  //       const token = cookies[ruleset.cookiejwt.cookieKey];
  //       //returns decoded token or error message
  //       try {
  //         jwt.verify(token, secret);
  //         next();
  //       } catch {
  //         res.status(403).send("You do not have the required credentials.")
  //       }
  //     }
  //   }
  // }
}

export {
  AuthorizationControllerBlueprint
}