class InputValidator {
  /**
   * Validates cube constructor configuration
   * @param {Object} config
   * @param {Array} config.dimensions
   * @param {Array} config.members
   * @throws {Error} if no dimensions are specified
   * @throws {Error} if no members are specified
   */
  static validateConfig(config) {
    const { dimensions, members } = config;
    if (!dimensions || dimensions.length === 0) {
      throw new Error('Cannot construct ArrayCube without dimensions.');
    }
    if (!members || members.length === 0) {
      throw new Error('Cannot construct ArrayCube without members.');
    }
  }
}

module.exports = InputValidator;
