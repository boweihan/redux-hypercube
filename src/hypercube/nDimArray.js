const createNDimArray = dimensions => {
  if (dimensions.length > 0) {
    var dim = dimensions[0];
    var rest = dimensions.slice(1);
    var newArray = new Array();
    for (var i = 0; i < dim; i++) {
      newArray[i] = createNDimArray(rest);
    }
    return newArray;
  } else {
    return undefined;
  }
};

const getElement = (array, indices) => {
  if (indices.length == 0) {
    return array;
  } else {
    return getElement(array[indices[0]], indices.slice(1));
  }
};

module.exports = {
  createNDimArray,
  getElement,
};
