interface settings {
  user: {
    userRole: string,
    username: string,
    password: string,
  },
  authnType: string
}

class AdvancedHopliteBlueprint {
  settings: settings;
  constructor(devSettings: settings) {
    this.settings = devSettings;
  }
}