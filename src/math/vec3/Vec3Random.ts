import { Vec3 } from './Vec3';

export function Vec3Random (a: Vec3, scale: number = 1, out: Vec3 = new Vec3()): Vec3
{
    const r = Math.random() * 2 * Math.PI;
    const z = Math.random() * 2 - 1;
    const zScale = Math.sqrt(1 - z * z) * scale;

    return out.set(
        Math.cos(r) * zScale,
        Math.sin(r) * zScale,
        z * scale
    );
}
