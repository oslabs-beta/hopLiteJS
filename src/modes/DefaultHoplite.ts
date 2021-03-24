class DefaultHopliteBlueprint {
  authenticate: AuthenticationControllerInterface;
  authorize: AuthorizationControllerInterface;
  constructor(authenticate: any, authorize: any) {
    this.authenticate = authenticate;
    this.authorize = authorize;
  }
  test(str: string) {
    console.log(str);
  }
}

export default DefaultHopliteBlueprint; 