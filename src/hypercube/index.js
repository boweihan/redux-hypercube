class Hypercube {
  /**
   * Create a hypercube.
   */
  constructor() {}

  /**
   * slice - analyze data for a single dimension
   * example: what were the sales in June of last year?
   */
  slice() {}

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
