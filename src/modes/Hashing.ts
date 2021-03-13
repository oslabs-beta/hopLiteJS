interface compare {
  compareArgon2: any;
  compareBcrypt: any;
}

interface hashCreate {
  createArgon2: any;
  createBcrypt: any;
}

class Hashing {
  compare: compare;
  hashCreation: hashCreate;
  constructor(comparisonFunctions: compare, hashCreationFunctions: hashCreate) {
    this.compare = comparisonFunctions;
    this.hashCreation = hashCreationFunctions;
  }
}