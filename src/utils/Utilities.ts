import * as fs from 'fs';
import * as sodium from 'libsodium-wrappers';
import { Payload, HopLiteRuleset } from '../types';
// const commonPasswords = fs.readFileSync('./commonPasswords.txt', { encoding: 'utf8' });
// const listCommonPasswords = commonPasswords.split('\n');

class Utilities {
  static verifyUser(username: string, userPassword: string, password: string, strategy: string) {

  }
  static opaqueTokenCreation(ruleset: HopLiteRuleset, payload: Payload) {
    if (ruleset.cookie) {
      const { opaqueKey } = ruleset.cookie;
      const key = sodium.from_hex(opaqueKey)
      const nonceArray = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);
      //creates an only once used value.
      const message = JSON.stringify(payload);
      const cipherTextArray = sodium.crypto_secretbox_easy(message, nonceArray, key);
      const cipherText = sodium.to_base64(cipherTextArray);
      const nonce = sodium.to_base64(nonceArray);
      return `${nonce}.${cipherText}`;
    } else {
      const cookieError = new Error("You have not enabled the cookie strategy.");
      console.log(cookieError);
      throw cookieError;
    }
    /*
    create a secretbox(encrypt) for the payload every time this function is called.
      crypto_secretbox_easy(MESSAGE, nonce, key)
        -ciphertext which represents the return value of secretbox(encrypted)
        -message which will be a string. JSON.stringify(payload) the payload to represent it as an object.
        -create a nonce with randombytes_buf
          -const nonce = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);
    create a way to open(decrypt) the secretbox.
    */
  }
  static opaqueTokenVerify(ruleset: HopLiteRuleset, cookie: string) {
    if(ruleset.cookie) {
      const { opaqueKey } = ruleset.cookie;
      const key = sodium.from_hex(opaqueKey);
      const nonce = sodium.from_base64(cookie.split('.')[0]);
      const cipherText = sodium.from_base64(cookie.split('.')[1]);
      const plainTextArray = sodium.crypto_secretbox_open_easy(cipherText, nonce, key);
      const plainText = sodium.to_string(plainTextArray);
      return JSON.parse(plainText);
    }
  }
  static passwordSchema(password: string) {
    //optimize this to be customizable in the future. 
    try {
      const regexIncludesNumAndSpecialChar = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
      // console.log("working regex: ", regexIncludesNumAndSpecialChar)
      if (!regexIncludesNumAndSpecialChar.test(password)) {
        throw new Error("All passwords must be 8 characters long and include 1 special character, 1 lower case character, 1 upper case character, a number");
      }
    } catch (err) {
      console.log(err);
    }
    return password;
  }
  // static enforceStrongPassword(password: string) {
  //   try {
  //     if (listCommonPasswords.includes(password)) {
  //       throw new Error("Please include a stronger password. Your current password is among the top 500 most common passwords.");
  //     }
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }
  static passwordDuration(duration: number) {

  }
}

class TokenBucket {
  capacity: number;
  tokens: number;
  lastRefill: number;
  fillPerMinute: number;
  constructor(capacity: number, fillPerMinute: number) {
    this.capacity = capacity;
    this.tokens = this.capacity;
    this.lastRefill = Math.floor((Date.now() / 1000) / 60);
    this.fillPerMinute = fillPerMinute;
  }
  useToken() {
    this.refillTokens();
    if (this.tokens > 0) {
      this.tokens -= 1;
      return true;
    }
    return false;
  }
  refillTokens() {
    const now = Math.floor((Date.now() / 1000) / 60);
    const rate = (now - this.lastRefill) / this.fillPerMinute;

    this.tokens = Math.min(this.capacity, this.tokens + Math.floor(rate * this.capacity));
    this.lastRefill = now;
  }
}

export {
  Utilities,
  TokenBucket
}