const HyperCube = require('./HyperCube');
const ArrayCube = require('./ArrayCube');

const Cube = HyperCube(ArrayCube);

const mockCube = new Cube(require('../../test/hypercube/mocks').mockConfig);
console.log(JSON.stringify(mockCube));
console.log(mockCube.slice('Color', mockCube.getMembersForDimension('Color')));

console.log(
  mockCube.dice({
    Color: mockCube.getMembersForDimension('Color'),
    Age: mockCube.getMembersForDimension('Age'),
  }),
);

module.exports = Cube;
