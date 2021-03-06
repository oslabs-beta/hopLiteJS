const { hasRole } = require("./AuthorizationHelperMethods");
// const { ModuleResolutionKind } = require("typescript");

class AuthorizationControllerBlueprint {
  authorizeCookie(req: Request, res: Response, next: any) { //these are the methods that the developer using our software invoke
    hasRole(req, res, next);
  }
}


// export default AuthorizationControllerBlueprint;
export {
  AuthorizationControllerBlueprint
}