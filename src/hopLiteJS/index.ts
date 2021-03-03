class hopLiteJSBlueprint {
  test(str) {
    console.log(str)
  }
}

const hopLiteJS = new hopLiteJSBlueprint();
const { test } = hopLiteJS;

module.exports = {
  test
}
