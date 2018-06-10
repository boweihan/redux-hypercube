const InputValidator = require('./InputValidator');

/**
 * Create a HyperCube with dependencies
 * @param {Class} CubeImpl
 */
const HyperCube = CubeImpl => {
  return class HyperCube {
    /**
     * Construct the HyperCube
     * @param {Object} config
     * @param {Array} config.dimensions
     * @param {Array} config.members
     */
    constructor(config) {
      InputValidator.validateConfig(config);
      this.cube = new CubeImpl(config);
    }
  };
};

module.exports = HyperCube;
