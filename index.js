'use strict'

/*!
 * imports.
 */

var curry2 = require('curry2')

/*!
 * exports.
 */

module.exports = curry2(unary)

/**
 * Creates a unary function wrapper which extracts a specific argument by index
 * and applies the argument to the original unary function.
 *
 * @param {Function} fun
 * Unary function to wrap.
 *
 * @param {Number} [idx=0]
 * Index of argument to extract.
 *
 * @return {Function}
 * Wrapped unary function.
 */

// ((Any) => Any, idx: Number) => (Any) => Any
function unary (fun, idx) {
  return function unary () {
    return fun(arguments[idx || 0])
  }
}
