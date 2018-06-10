const { createNDimArray } = require('./util');

class Hypercube {
  /**
   * Create a hypercube.
   * @param {Object} config
   * @param {Array} config.dimensions
   * @param {Array} config.members
   */
  constructor(config) {
    this.config = Object.assign(
      {
        dimensions: [],
        members: [],
      },
      config,
    );
    this.cube = createNDimArray();
  }

  /**
   * slice - analyze data for a single dimension
   * example: what were the sales in June of last year?
   */
  slice(dimension, filter) {
    let points = [];
    let data = [];

    const dimensionIndex = this.config.dimensions.indexOf(dimension);

    if (dimensionIndex === -1) {
      throw new TypeError('dimension not found', dimension);
    }

    this.points.forEach((point, i) => {
      // Add slice if it matches given filter.
      if (point[dimensionIndex] === filter) {
        data.push(this.data[i]);
        points.push(this.points[i]);
      }
    });

    return new Table(Object.assign({}, structure, { points, data }));
  }

  /**
   * dice - analyize data for more than one dimension
   * example: what were our sales in June of last year in New York state?
   */
  dice() {}

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

module.exports = Hypercube;
