interface HopLiteUser {
  username: string;
  password?: string;
  privilege: boolean;
}
interface Payload {
  [payloadKey: string]: string;
}
interface CookieJWTInterface {
  [cookieName: string]: JWTInterface

}
interface CookieInterface {
  [cookieKey: string]: string;
}
interface JWTInterface {
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
  JWTInterface,
  messageJSON
}