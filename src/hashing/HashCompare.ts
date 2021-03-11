
import * as bcrypt from "bcrypt";
import * as argon2 from "argon2";
class HashCompareBlueprint {
  async compareArgon2(hashedPassword: string, password: string) {
    return await argon2.verify(hashedPassword, password);
  }
  compareBcrypt(password: string) {

  }
}

const HashCompare = new HashCompareBlueprint();
const { compareArgon2, compareBcrypt } = HashCompare;

export {
  compareArgon2,
  compareBcrypt
}
export default HashCompare;
//