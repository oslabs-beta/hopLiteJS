interface HopLiteUser {
  username: string;
  password?: string;
  privilege: boolean;
}
interface Payload {
  [key: string]: string;
}
interface CookieJWTInterface {
  // cookieKey: string;
  // secret: string;
  // payload: Payload;
  [key: string]: JWTInterface
}
interface CookieInterface {
  // cookieKey: string;
  // cookieValue: string;
  [key: string]: string;
}
interface JWTInterface {
  // payload: Payload;
  // secret: string;
  [key: string]: Payload;
}
interface HopLiteRuleset {
  cookieJWT?: CookieJWTInterface;
  cookie? : CookieInterface;
  JWT? : JWTInterface;
  bcrypt? : boolean;
  salting? : number;
  argon? : boolean;
  bearerToken? : boolean;
  securityKey? : boolean;
  Oauth?: boolean;
  mfa? : boolean;
  digest?: boolean;
  apiKey?: boolean;
  awsSignature?: boolean;
  ntlm?: boolean;
  akamai?: boolean;
  hawk?: boolean;
}


export {
  HopLiteUser,
  HopLiteRuleset,
  CookieJWTInterface,
  CookieInterface,
  Payload,
  JWTInterface
}