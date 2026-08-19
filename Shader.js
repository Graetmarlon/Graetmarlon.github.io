const canvas = document.getElementById("Shader");
const gl = canvas.getContext("webgl");

if (!gl) {
    console.error("WebGL not supported");
}

// Resize canvas
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
}
window.addEventListener("resize", resize);
resize();

// Fullscreen quad
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
        -1, -1,  1, -1, -1,  1,
        -1,  1,  1, -1,  1,  1
    ]),
    gl.STATIC_DRAW
);

// Vertex shader
const vertexSource = `
attribute vec2 pos;
void main() {
    gl_Position = vec4(pos, 0.0, 1.0);
}
`;

// Fragment shader (your effect)
const fragmentSource = `
precision mediump float;

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord / resolution;

    vec2 p = uv * 2.0 - 1.0;
    p.x *= resolution.x / resolution.y;

    float fisheyePower = -0.2;

    float r2 = dot(p, p);
    p *= 1.0 + fisheyePower * r2;

    vec2 distortedUV = (p + 3.0) * 0.5;

    vec2 q = 10.0 * distortedUV;

    for (int j = 0; j < 5; j++) {
        float i = 1.0 + float(j) * 0.2;
        q.x += (1.0 / i) * cos(i * q.y + time * 0.5 + 0.2 * i);
    }

    vec3 col = vec3(
        0.5 * sin(3.0 * q.x) + 0.5,
        0.5 * sin(3.0 * q.y) + 0.5,
        sin(1.3 * q.x + 1.7 * q.y)
    );

    float f = 0.43 * (col.x + col.y + col.z);
    f += step(1.0, f);

    gl_FragColor = vec4(0.2 * f, 0.0, 0.1 * f, 1.0);
}
`;


// Compile shader helper
function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
    }
    return shader;
}

const program = gl.createProgram();
gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
gl.linkProgram(program);
gl.useProgram(program);

// Attributes
const posLoc = gl.getAttribLocation(program, "pos");
gl.enableVertexAttribArray(posLoc);
gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

// Uniforms
const timeLoc = gl.getUniformLocation(program, "time");
const resLoc = gl.getUniformLocation(program, "resolution");

// Render loop
function render(t) {
    gl.uniform1f(timeLoc, t * 0.001);
    gl.uniform2f(resLoc, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
}

requestAnimationFrame(render);
