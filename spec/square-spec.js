const square = require('../src/square');

describe("square", function () {
  const tests = [{
    data: 1, expecteResult: 1,
  }, {
    data: 2, expecteResult: 4,
  }, {
    data: 3, expecteResult: 9,
  }, {
    data: 4, expecteResult: 15,
  }]

  for (const {data, expecteResult} of tests) {
    it(`${data} * ${data} should equal ${expecteResult}`, function () {
      expect(square(data)).toEqual(expecteResult);
    });
  }

});
