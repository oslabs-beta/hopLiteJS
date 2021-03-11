import * as bcrypt from "bcrypt";
import * as argon2 from "argon2";


class HashingMethodsBlueprint {
  async pwArgon2(password: string) {
    return await argon2.hash(password);
  }

  async pwBcrypt(password: string, salt: number) {
    return await bcrypt.hash(password, salt);
  }
}

const HashMethods = new HashingMethodsBlueprint();
const { pwArgon2, pwBcrypt } = HashMethods;

export {
  pwArgon2,
  pwBcrypt
}
