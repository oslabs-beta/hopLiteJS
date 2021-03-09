interface AuthorizationControllerInterface {
  authorizeCookie: any
}

class DefaultHopliteBlueprint {
  AuthorizationController: AuthorizationControllerInterface
  constructor(AuthorizationController: AuthorizationControllerInterface) {
    this.AuthorizationController = AuthorizationController;
  }
  test(str: string) {
    console.log(str);
  }
}

export default DefaultHopliteBlueprint;