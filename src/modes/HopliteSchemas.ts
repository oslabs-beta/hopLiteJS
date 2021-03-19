class HopliteSchemasBlueprint {
  createUser(username: string, password: string, userRole: boolean) {
    const user = {
      username,
      password,
      userRole
    }
    return user;
  }
  createRuleset(bool: boolean) { //...args: any
    const ruleset = {
      cookiejwt: bool
    } //{...args};
    console.log(ruleset);
    return ruleset;
  }
}

export {
  HopliteSchemasBlueprint
}