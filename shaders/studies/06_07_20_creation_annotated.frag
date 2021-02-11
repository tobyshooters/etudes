// Annotated version of Creation by Silexars
// Reference: https://www.shadertoy.com/view/XsXXDn

precision mediump float;

#define PI 3.14159

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float y) {
    // If st.y near y return 1.0 else 0.0
    return (abs(y - st.y) < 0.001) ? 1.0 : 0.0;
    /* return smoothstep(y-0.01, y, st.y) - */
    /*        smoothstep(y, y+0.01, st.y); */
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec2 ms = u_mouse / u_resolution;

    vec3 c;
    float t = u_time;

    for (int i=0; i<3; i++) {
        // Color delay
        t += 0.07;

        // Distance field from center of canvas
        vec2 p = st - 0.5;
        p.x *= u_resolution.x / u_resolution.y; // center for rect canvas
        float l = length(p);

        // Pulses
        vec2 uv = st;             // xy-plane is green/red
        vec2 d = (p/l);           // d.normalized() */
        d *= sin(t) + 1.;         // scale d within (0, 2) */
        d *= abs(sin(9.*l-2.*t)); // pulses */
        uv += d;                  // color-space is dislocated */

        // Ball in multiplied space
        float r = 0.1 / length(abs(fract(uv) - 0.5));
        c[i] = r;
    }

    // l = abs(sin(l * 9.0 - 2.0 * t));

    // gl_FragColor = vec4(l, l, l, 1.0);
    gl_FragColor = vec4(c, 1.0);
}
