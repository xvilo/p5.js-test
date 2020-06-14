/**
 * @file Has a list of interfaces
 *
 * As interfaces/protocols are not a part of ECMAscript itself
 * We can however, use JSDoc annotations for this. This could
 * help compilers like Google Closure Compiler to do static code
 * analysis. Or help your IDE show the right code auto completion.
 */

/**
 * Interface for drawables
 * @interface
 */
function Drawable() {}

/**
 * Draw current objects
 * @returns void
 */
Drawable.prototype.draw = function () {}

/**
 * Interface for drawables
 * @interface
 */
function Loadable() {}

/**
 * Draw current objects
 * @returns void
 */
Loadable.prototype.load = function () {}