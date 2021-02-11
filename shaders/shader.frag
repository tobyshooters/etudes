precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;

float sin01(float x) {
    return 0.5 * (sin(x) + 1.0);
}

void main() {
    vec2 st = gl_FragCoord.xy / (2.0 * u_resolution);
    float t = u_time;

    vec3 c;
    for (int i=0; i<3; i++) {
        c[i] = sin01(t + st.x * st.y * float(i));
    }

    gl_FragColor = vec4(c, 1.0);
}
