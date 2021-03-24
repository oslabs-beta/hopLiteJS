import { createSecretKey } from "node:crypto";

interface HopLiteUser {
  username: string;
  password?: string;
  privilege: boolean;
}


interface MessageJSON {
  [key: string]: string;
}

interface CookieOptions {
  domain?: string;
  encode?: () => {};
  expires?: Date;
  maxAge?: number;
  httpOnly?: boolean;
  path?: string;
  secure?: boolean;
  signed?: boolean;
  sameSite?: boolean | string;
}
interface Cookies {
  [cookieKey: string]: string;
}
interface CookieConfig {
  options?: CookieOptions;
  cookies: Cookies;
}
// interface JWTInterface {
//   [name: string]: Payload;
//   secret: string;
// }
interface Payload {
  [payloadKey: string]: string;
}

interface JWTConfig {
  [key: string]: JWT;
}
// secret: string;
// payloads: JWTPayloads;
interface JWT {
  options?: CookieOptions
  secret: string;
  payload: Payload;
}

interface HopLiteRuleset {
  message: string | MessageJSON;
  cookieJWT?: JWTConfig;
  cookie?: CookieConfig;
  JWT?: JWTConfig;
  bcrypt?: boolean;
  salting?: number;
  argon?: boolean;
  bearerToken?: boolean;
  securityKey?: boolean;
  Oauth?: boolean;
  mfa?: boolean;
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
  Cookies,
  CookieOptions,
  CookieConfig,
  JWTConfig,
  Payload,
  MessageJSON
}