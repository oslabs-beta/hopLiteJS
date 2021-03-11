/* eslint-disable class-methods-use-this */
class HopliteUserSchemaBlueprint {
  createUser(username: string, password: string, userRole: boolean) {
    const user = {
      username,
      password,
      userRole
    };
    return user;
  }
}


// eslint-disable-next-line import/prefer-default-export
export { HopliteUserSchemaBlueprint };
