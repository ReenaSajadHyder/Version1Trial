const index = (a, b) => a - b;

var my_favorite_color = "#112C85";





/**
 *
 * @type {{ sum: (a: any, b: any) => any; diff: (a: any, b: any) => number; product: (a: any, b: any) => number; }}
 */
const mathOperations = {
  sum: function (a, b) {
    return a + b;
  },

  diff: function (a, b) {
    return a - b;
  },
  product: function (a, b) {
    return a * b;
  },
};

// export default subtract;
module.exports = index;


