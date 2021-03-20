interface HopLiteUser {
  username: string;
  password?: string;
  privilege: boolean;
}
interface Payload {
  [key1: string]: string;
}
interface CookieJWTInterface {
  cookieKey: string;
  secret: string;
  payload: Payload;
}
interface CookieInterface {
  payload: Payload;
  secret: string;
}
interface JWTInterface {
  payload: Payload;
  secret: string;
}
interface HopLiteRuleset {
  cookiejwt?: CookieJWTInterface;
  cookie? : CookieInterface;
  jwt? : JWTInterface;
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

/*
{
  cookiejwt: {
    cookiekey: name,
    secret: string,
    payload: {
      userKey1: someVal,
      userKey2: someVal,
      userKey3: someVal,
      userKey4: someVal,
      userKey5: someVal,
    }

  }
}
*/


export {
  HopLiteUser,
  HopLiteRuleset,
  CookieJWTInterface,
  CookieInterface,
  Payload
}