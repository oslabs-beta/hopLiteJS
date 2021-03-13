import * as bcrypt from "bcrypt";
import * as argon2 from "argon2";


class HashingMethodsBlueprint {
  async pwArgon2(password: string) {
    return await argon2.hash(password);
  }
  async pwBcrypt(inputPassword: string, salt: number = 10) {
    console.log('bcrypt input hashing works!');
    return await bcrypt.hash(inputPassword, salt);
  }
  async compareArgon2(hashedPassword: string, password: string) {
    return await argon2.verify(hashedPassword, password);
  }
  
  async compareBcrypt(inputPassword: string, hashedPassword: string) {
    console.log('bcrypt comparison hashing works!');
    return await bcrypt.compare(inputPassword, hashedPassword);
  }
}




const HashMethods = new HashingMethodsBlueprint();
const { pwArgon2, pwBcrypt, compareArgon2, compareBcrypt } = HashMethods;

export {
  pwArgon2,
  pwBcrypt,
  compareArgon2,
  compareBcrypt
};
export default HashMethods;
