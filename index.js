/*!
 * alphabet <https://github.com/jonschlinkert/alphabet>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.toUpperCase();

module.exports = [...upper, ...lower];
module.exports.lower = [...lower];
module.exports.upper = [...upper];
