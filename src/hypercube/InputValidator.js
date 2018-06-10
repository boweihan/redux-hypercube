class InputValidator {
  /**
   * Validates cube constructor configuration
   * @param {Object} config
   * @param {Array<String>} config.dimensions
   * @param {Array<Array<String>>} config.members
   * @param {Array<Object>} config.intersections
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

  /**
   * Validates slice call
   * @param {String} dimension
   * @param {Array<String>} dimensionList
   * @param {Array<String>} members
   * @throws {TypeError} if dimension is not in dimensionList
   */
  static validateSlice(dimension, dimensionList, members) {
    if (dimensionList.indexOf(dimension) === -1) {
      throw new Error('dimension not found', dimension);
    }
    if (!members) {
      throw new Error('members must be specified', members);
    }
  }

  /**
   * Validates dice call
   * @param {Object} diceObj - { dimension: Array<Member> ...}
   * @throws {TypeError} if dimension is not in dimensionList
   */
  static validateDice(diceObj) {
    if (Object.keys(diceObj).length === 0) {
      throw new Error('no dice dimensions specified');
    }
    const dimensionValues = Object.values(diceObj);
    for (let i = 0; i < dimensionValues.length; i += 1) {
      if (dimensionValues[i].length === 0) {
        throw new Error(
          'members must be specified in each dimension of a dice call',
          Object.keys(diceObj)[i],
        );
      }
    }
  }
}

module.exports = InputValidator;
