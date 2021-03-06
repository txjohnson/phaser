/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @author       Florian Mertens
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ILine } from './ILine';
import { Vec2 } from '../../math/vec2/Vec2';

/**
 * Get the shortest distance from a Line to the given Point.
 */
export function GetShortestLineDistance (line: ILine, point: Vec2): number
{
    const { x1, y1, x2, y2 } = line;

    const L2 = (((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));

    if (L2 === 0)
    {
        return 0;
    }

    const s = (((y1 - point.y) * (x2 - x1)) - ((x1 - point.x) * (y2 - y1))) / L2;

    return Math.abs(s) * Math.sqrt(L2);
}
