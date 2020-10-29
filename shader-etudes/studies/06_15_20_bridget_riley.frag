precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.1415926

float f(float x) {
    x = (1.0 - x);        // Flip vertically
    x *= (0.5 * x + 0.7); // Varying frequency
    x *= 3.0 * PI;        // Total period

    // Move towards PI/2 humps making sin fatter
    float delta = (PI/2.0) - mod(x, PI);
    float factor = 1.0 - (abs(delta) / (PI/2.0));
    x += 0.6 * factor * delta;

    return -0.25 * sin(x);
}

void main() {
    vec2 st = gl_FragCoord.xy / (2.0 * u_resolution);
    st.x += f(st.y);
    vec2 uv = fract(35.0 * st);
    vec3 color = vec3(floor(uv.x + 0.5));
    gl_FragColor = vec4(color, 1.0);
}
