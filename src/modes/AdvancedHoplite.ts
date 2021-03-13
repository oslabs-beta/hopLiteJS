interface AuthorizationControllerInterface {//these interfaces represent the methods attached to Authorization/Authentication controllers
  authorizeCookie: any;
  testAuthz: any;
}
interface AuthenticationControllerInterface {//these interfaces represent the methods attached to Authorization/Authentication controllers
  authenticate: any;
  testAuthn: any;
}


class AdvancedHopliteBlueprint {
  AuthnController: AuthenticationControllerInterface;
  AuthzController: AuthorizationControllerInterface;
  constructor(AuthenticationController: AuthenticationControllerInterface, AuthorizationController: AuthorizationControllerInterface) {
    this.AuthnController = AuthenticationController;
    this.AuthzController = AuthorizationController;
  }
}