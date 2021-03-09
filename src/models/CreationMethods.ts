class CreationMethodsBlueprint {
  createUser(username: string, password: string, userRole: boolean) {
    const user = {
      username,
      password,
      userRole
    }
    return user;
  }
  createCookie(inputRole: string) {
    // res.cookie({ role: inputRole })
  }
  createJWT(secret: string) {
    return
  }
  createSession (){
    // return req.session.uid
  }
}

