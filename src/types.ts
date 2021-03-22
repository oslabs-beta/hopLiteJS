interface HopLiteUser {
  username: string;
  password?: string;
  privilege: boolean;
}
interface Payload {
  [payloadKey: string]: string;
}
interface CookieJWTInterface {
  // cookieKey: string;
  // secret: string;
  // payload: Payload;
  [cookieName: string]: JWTInterface

}
interface CookieInterface {
  // cookieKey: string;
  // cookieValue: string;
  [cookieKey: string]: string;
}
interface JWTInterface {
  // payload: Payload;
  // secret: string;
  [secret: string]: Payload;
}

interface messageJSON {
  [key:string]:string;
}

interface HopLiteRuleset {
  message: string | messageJSON;
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