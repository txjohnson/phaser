import { IVec2 } from './IVec2';

export function PerpDot (a: IVec2, b: IVec2): number
{
    return (a.x * b.y) - (a.y * b.x);
}
