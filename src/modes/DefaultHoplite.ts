interface AuthorizationControllerInterface {//these interfaces represent the methods attached to Authorization/Authentication controllers
  authorizeCookie: any;
  authorizeJWT: any;
  authorize: any;
  testAuthz?: any;
}

interface AuthenticationControllerInterface {//these interfaces represent the methods attached to Authorization/Authentication controllers
  authenticate: any;
  authenticateJWT: any;
  authenticateCookie: any;
  testAuthn?: any;
}

class DefaultHopliteBlueprint {
  AuthnController: AuthenticationControllerInterface;
  AuthzController: AuthorizationControllerInterface;
  constructor(AuthorizationController: AuthorizationControllerInterface, AuthenticationController: AuthenticationControllerInterface) {
    this.AuthnController = AuthenticationController;
    this.AuthzController = AuthorizationController;
  }
  test(str: string) {
    console.log(str);
  }
}

export default DefaultHopliteBlueprint; 