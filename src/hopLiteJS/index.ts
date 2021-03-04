class hopLiteJSBlueprint {
  test(str) {
    const number = "hello";
    console.log(str)
  }
}

const hopLiteJS = new hopLiteJSBlueprint();
const { test } = hopLiteJS;

module.exports = {
  test
}
