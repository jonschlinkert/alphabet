/*!
 * alphabet <https://github.com/jonschlinkert/alphabet>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

const lower = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
const upper = lower.map(c => c.toUpperCase())

module.exports = [...upper, ...lower];

module.exports.lower = lower;
module.exports.upper = upper;
