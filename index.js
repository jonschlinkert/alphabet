/*!
 * alphabet <https://github.com/jonschlinkert/alphabet>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = lower.toUpperCase();

/*
Why `+` instead of template literal?
Because we're concatenating vars, so there's no benefit.
Also because of retro-compatibility.

Why `split` instead of `[...]`?
Because `split` is "more readable", and is retro-compatible.
It also has better performance:
It iterates over fixed-size code-units, instead of var-len code-points.
This has the advantage of explicitly telling the engine "this is an array of bytes, not pointers to arbitrary Unicode strs",
which in turn, reduces memory use, because of contiguous ASCII chars, and makes indexing faster.
*/
module.exports = (upper + lower).split('');
module.exports.lower = lower.split('');
module.exports.upper = upper.split('');
