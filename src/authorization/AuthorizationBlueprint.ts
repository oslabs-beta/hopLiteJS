import { hasRole } from "../authorization/AuthorizationHelperMethods";

class AuthorizationController {
  authorize(req: Request, res: Response, next: NextFunction) {
    const cookies = req.cookies;
    hasRole(cookies, someInfo) //needs a role.
    
  }
  
}