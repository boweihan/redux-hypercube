const InputValidator = require('./InputValidator');

class ArrayCube {
  /**
   * Create an ArrayCube
   * @param {Object} config
   * @param {Array<String>} config.dimensions
   * @param {Array<Array<String>>} config.members
   * @param {Array<Object>} config.intersections
   */
  constructor(config) {
    InputValidator.validateConfig(config);
    this.config = {
      dimensions: [],
      members: [],
      intersections: [],
      ...config,
    };
    const dims = this.config.members.map(dimMembers => dimMembers.length);
    this.impl = this.createCube(dims);
  }

  /**
   * helper to recursively create an n-dimensional array implementation of a cube
   * @param {Array} dimensions
   * @returns {Array} n-dimensional array cube
   */
  createCube(dimensions) {
    const dim = dimensions[0];
    const rest = dimensions.slice(1);
    const cube = [];
    for (let i = 0; i < dim; i += 1) {
      cube[i] = this.createCube(rest);
    }
    return cube;
  }

  /**
   * helper to recursively retrieve an element from the cube
   * @param {Array} indices
   * @returns {Array} n-dimensional cube slice
   */
  getElement(indices) {
    if (!indices || indices.length === 0) {
      return this.impl;
    }
    return this.getElement(this.impl[indices[0]], indices.slice(1));
  }

  /**
   * helper to retrieve an array of members corresponding to a dimension
   * @param {String} dimension
   * @returns {Array<String>} members
   */
  getMembersForDimension(dimension) {
    const memberIndex = this.config.dimensions.indexOf(dimension);
    if (memberIndex !== -1) {
      return this.config.members[memberIndex];
    }
    return [];
  }

  /**
   * slice - analyze data for a single dimension
   * example: what were the sales in June of last year?
   * @param {String} dimension - dimension key
   * @param {Array<String>} members - members to filter by
   * @returns {Array<Object>} intersection values
   */
  slice(dimension, members) {
    InputValidator.validateSlice(dimension, this.config.dimensions, members);
    return this.config.intersections.filter(intersection => {
      return members.indexOf(intersection[dimension]) !== -1;
    });
  }

  /**
   * dice - analyze data for more than one dimension
   * example: what were our sales in June of last year in New York state?
   * @param {Object} diceObj - { dimension: Array<Member> ...}
   */
  dice(diceObj) {
    InputValidator.validateDice(diceObj);
    const dimensions = Object.keys(diceObj);
    return this.config.intersections.filter(intersection => {
      for (let i = 0; i < dimensions.length; i += 1) {
        if (
          diceObj[dimensions[i]].indexOf(intersection[dimensions[i]]) === -1
        ) {
          return false;
        }
      }
      return true;
    });
  }

  /**
   * drillUp - analyze data at most summarized level
   * example: what were our sales last year?
   */
  drillUp() {}

  /**
   * drillDown - analyze data at most detailed level
   * example: what were our sales last year?
   */
  drillDown() {}

  /**
   * rollUp - analyze summary information for one or more dimensions
   * example: what were our monthly totals?
   */
  rollUp() {}

  /**
   * pivot - rotate data to provide alternative presentation
   * example: what were our monthly totals for each product category?
   */
  pivot() {}
}

module.exports = ArrayCube;
