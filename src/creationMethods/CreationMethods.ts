class CreationMethodsBlueprint {
  CreateUser(username: string, password: string, userRole: string) {
    const user = {
      username,
      password,
      userRole
    }
    return user;
  }
  CreateCookie(inputRole: string) {
    res.cookie({ role: inputRole })
  }
  CreateJWT(secret: string) {

  }
}