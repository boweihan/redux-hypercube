const mockConfig = {
  dimensions: ['Color', 'Age', 'Size'],
  members: [['blue', 'yellow'], [16, 20, 25], ['Big', 'Small']],
  intersections: [
    { Color: 'blue', Age: 16, Size: 'Small', value: {} },
    { Color: 'blue', Age: 20, Size: 'Small', value: {} },
    { Color: 'blue', Age: 25, Size: 'Small', value: {} },
    { Color: 'blue', Age: 16, Size: 'Big', value: {} },
    { Color: 'blue', Age: 20, Size: 'Big', value: {} },
    { Color: 'blue', Age: 25, Size: 'Big', value: {} },
    { Color: 'yellow', Age: 16, Size: 'Small', value: {} },
    { Color: 'yellow', Age: 16, Size: 'Big', value: {} },
  ],
};

module.exports = {
  mockConfig,
};
