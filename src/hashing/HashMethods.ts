import * as bcrypt from "bcrypt";
import * as argon2 from "argon2";


class HashingMethodsBlueprint {
  async pwArgon2(password: string) {
    return await argon2.hash(password);
  }

  async pwBcrypt(password: string, salt: number = 10) {
    console.log('bcrypt works!');
    // return await 
    let test = await bcrypt.hash(password, salt);
    console.log('test',test);
    return  test;
  }

  async compareArgon2(hashedPassword: string, password: string) {
    return await argon2.verify(hashedPassword, password);
  }
  //TED's comment: do we need another parameter below in 'compareBcrypt' for the database password?  compare: formPassword and dbpassword attached to username
  async compareBcrypt(password: string) {

  }
}

// const HashMethods = new HashingMethodsBlueprint();
// const { pwArgon2, pwBcrypt, compareArgon2, compareBcrypt } = HashMethods;

// export {
//   pwArgon2,
//   pwBcrypt,
//   compareArgon2,
//   compareBcrypt
// };
export { HashingMethodsBlueprint };
// export default HashMethods;