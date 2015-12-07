'use strict'

/*!
 * imports.
 */

var test = require('tape')

/*!
 * imports (local).
 */

var unary = require('./')

/*!
 * unary predicates.
 */

function even (n) {
  return n % 2 !== 0
}

function odd (n) {
  return n % 2 === 0
}

/*!
 * fixtures.
 */

var fruit = [ 'apple', 'pear', 'pineapple', 'strawberry', 'orange', 'grapefruit' ]
var oddFruit = [ 'apple', 'pineapple', 'orange' ]
var evenFruit = [ 'pear', 'strawberry', 'grapefruit' ]

/*!
 * tests.
 */

test('full application', function (t) {
  t.plan(1)

  var iteratee = unary(even, 1)
  t.deepEqual(fruit.filter(iteratee), evenFruit)
})

test('partial application', function (t) {
  t.plan(1)

  var iteratee = unary(odd)
  t.deepEqual(fruit.filter(iteratee(1)), oddFruit)
})
