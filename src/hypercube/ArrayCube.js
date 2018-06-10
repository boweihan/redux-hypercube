class ArrayCube {
  /**
   * Create an ArrayCube
   * @param {Object} config
   * @param {Array} config.dimensions
   * @param {Array} config.members
   */
  constructor(config) {
    this.config = {
      dimensions: [],
      members: [],
      ...config,
    };
    this.cube = this.createNDimArray(config.dimensions);
  }

  /**
   * helper to recursively create an n-dimensional array implementation of a cube
   * @param {Array} dimensions
   * @returns {Array} n-dimensional array cube
   */
  createCube(dimensions) {
    var dim = dimensions[0];
    var rest = dimensions.slice(1);
    var cube = new Array();
    for (var i = 0; i < dim; i++) {
      cube[i] = createNDimArray(rest);
    }
    return cube;
  }

  /**
   * helper to recursively retrieve an element from the cube
   * @param {Array} indices
   * @returns {Array} n-dimensional cube slice
   */
  getElement(indices) {
    if (!indices || indices.length == 0) {
      return this.cube;
    } else {
      return getElement(this.cube[indices[0]], indices.slice(1));
    }
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

module.exports = ArrayCube;
