import '../../renderer/webgl1/GL.js';
import { CreateCanvas } from '../CreateCanvas.js';
import '../../math/pow2/IsSizePowerOfTwo.js';
import '../../renderer/webgl1/CreateGLTexture.js';
import '../../renderer/webgl1/DeleteFramebuffer.js';
import '../../renderer/webgl1/DeleteGLTexture.js';
import '../Frame.js';
import '../../renderer/webgl1/SetGLTextureFilterMode.js';
import '../../renderer/webgl1/UpdateGLTexture.js';
import { Texture } from '../Texture.js';

function SolidColorTexture(color = 'rgba(0,0,0,0)', width = 32, height = 32) {
    const ctx = CreateCanvas(width, height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    return new Texture(ctx.canvas);
}

export { SolidColorTexture };
