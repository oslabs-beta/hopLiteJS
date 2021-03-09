interface compare {

}

interface hashCreate {

}

class Hashing {
  comparison: compare;
  hashCreation: hashCreate;
  constructor(comparisonFunctions: compare, hashCreationFunctions: hashCreate) {
    this.comparison = comparisonFunctions;
    this.hashCreation = hashCreationFunctions;
  }
}