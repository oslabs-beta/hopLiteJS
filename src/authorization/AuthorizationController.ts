import jwt from 'jsonwebtoken';
import { AuthorizationHelperMethods } from "./AuthorizationHelperMethods";
// const { ModuleResolutionKind } = require("typescript");
class AuthorizationControllerBlueprint {
  testAuthz(str: string) {
    console.log(str);
  }
  authorizeCookie(req: Request, res: Response, next: any) { //these are the methods that the developer using our software invoke
    console.log("authorizeCookie is firing.");
    AuthorizationHelperMethods.hasRole(req, res, next);
  }
  authorizeJWT(req: Request, res: Response, next: any) {
    jwt.verify()
  }
  authorizeSession(req: Request, res: Response, next: any) {
    
  }
}

// export default AuthorizationControllerBlueprint;
export {
  AuthorizationControllerBlueprint
}



