#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 imageSize;

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 q = 10.0 * fragCoord.xy / imageSize.xy;

    // Distortion loop
    for (int j = 0; j < 5; j++) {
        float i = 1.0 + float(j) * 0.2;
        vec2 o = q;
        o.x += (0.5 / i) * cos(i * q.y + time * 0.3 + 0.03 * i);
        q = o;
    }

    // Color calculation
    vec3 col = vec3(
        0.5 + 0.5 * sin(3.0 * q.x + time),
        0.5 + 0.5 * sin(3.0 * q.y + time * 0.7),
        0.5 + 0.5 * sin(1.3 * q.x + 1.7 * q.y + time * 1.2)
    );

    gl_FragColor = vec4(col * 0.8, 1.0);
}



// void mainImage( out vec4 fragColor, in vec2 fragCoord )
// {
//     // Normalized pixel coordinates (from 0 to 1)
//     vec2 uv = fragCoord/iResolution.xy;

//     // Time varying pixel color
//     vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));

//     // Output to screen
//     fragColor = vec4(col,1.0);
// }