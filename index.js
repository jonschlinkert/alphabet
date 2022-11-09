/*!
 * alphabet <https://github.com/jonschlinkert/alphabet>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var l = 'abcdefghijklmnopqrstuvwxyz';
var u = l.toUpperCase();

module.exports = (u + l).split('');
module.exports.lower = l.split('');
module.exports.upper = u.split('');
