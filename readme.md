# unary
> Creates a unary function wrapper which extracts a specific argument by index and applies the argument to the original unary function.

[![Build Status](http://img.shields.io/travis/wilmoore/unary.js.svg)](https://travis-ci.org/wilmoore/unary.js) [![Code Climate](https://codeclimate.com/github/wilmoore/unary.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/unary.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install unary --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/unary.svg)](https://www.npmjs.org/package/unary) [![NPM downloads](http://img.shields.io/npm/dm/unary.svg)](https://www.npmjs.org/package/unary) [![Dependency Status](https://gemnasium.com/wilmoore/unary.js.svg)](https://gemnasium.com/wilmoore/unary.js)

## Examples

###### require

```js
var unary = require('unary')
```

###### full application

```js
var odds = unary(odd, 1)
var fruit = [ 'apple', 'pear', 'pineapple', 'strawberry', 'orange', 'grapefruit' ]

fruit.filter(odds)
//=> [ 'apple', 'pineapple', 'orange' ]
```

###### functor (+ partial application)

```js
var evens = unary(even)
var fruit = [ 'apple', 'pear', 'pineapple', 'strawberry', 'orange', 'grapefruit' ]

fruit.filter(evens(1))
//=> [ 'pear', 'strawberry', 'grapefruit' ]
```

## API

### `unary(fun, idx)`

###### arguments

 - `fun: (Function)` Unary function to wrap.
 - `idx: (Number)` Index of argument to extract.

###### returns

 - `(Function)` Wrapped unary function.

## License

[![GitHub license](https://img.shields.io/github/license/wilmoore/unary.js.svg)](https://github.com/wilmoore/unary.js/blob/master/license)
