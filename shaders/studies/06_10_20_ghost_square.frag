precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / (2.0 * u_resolution);
    vec2 ms = u_mouse / (2.0 * u_resolution);

    vec2 uv = 1.0 - abs(2.0 * (st - 0.5));
    float r = pow(1.0 - length(uv / (uv.x * uv.y) - 0.5), 4.0);

    vec3 color;
    float t = u_time;

    for (int i=0; i<3; i++) {
        t += 0.03;

        vec2 c = vec2(sin(t), cos(t));
        c = 0.5 * (0.7 * c + 1.0);
        float s = 0.1 / length(st - c);

        float p = r * s;
        color[i] =  1.0 - p;
    }

    gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
}
