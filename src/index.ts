class hopLiteJSBlueprint {
  test(str: string) {
    const num: number = 5;
    console.log(str + num);
  }
}

const hopLiteJS = new hopLiteJSBlueprint();
const { test } = hopLiteJS;

module.exports = {
  test
}