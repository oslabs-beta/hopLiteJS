import jwt from 'jsonwebtoken';
interface JWTPayload {
  username: string;
  role: string;
  email?: string;
}
class AuthenticationHelperMethods {
  createCookie(inputRole: string) {
    // res.cookie({ role: inputRole })
  }
  static createJWT(payload: JWTPayload,secret: string) {
    const credential = jwt.sign(payload, secret);
    return credential;
  }
  createSession(secret: string){
    
  }
  //load balancer
}

export {
  AuthenticationHelperMethods
}