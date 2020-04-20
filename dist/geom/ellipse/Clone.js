/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import Ellipse from './Ellipse';
/**
 * Creates a new Ellipse instance based on the values contained in the given source.
 *
 * @function Phaser.Geom.Ellipse.Clone
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Ellipse} source - The Ellipse to be cloned. Can be an instance of an Ellipse or a ellipse-like object, with x, y, width and height properties.
 *
 * @return {Phaser.Geom.Ellipse} A clone of the source Ellipse.
 */
export default function Clone(source) {
    return new Ellipse(source.x, source.y, source.width, source.height);
}
//# sourceMappingURL=Clone.js.map