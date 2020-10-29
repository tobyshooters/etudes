// Study of Creation by Silexars
// Less mods, more balls, sunset-esque
// Reference: https://www.shadertoy.com/view/XsXXDn

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float t = u_time;

    vec3 c;
    // Each color separate with delay
    for (int i=0; i<3; i++) {
        t += 100.0; // Color delay

        // Distance field from center of canvas
        vec2 p = st - 0.5;
        float l = length(p);
        vec2 d = p / l;

        // Oscillate the distance field
        d *= sin(t) + 1.;        // Overall scale
        d *= abs(sin(9.*l - t)); // Proportional to distance

        // Make ball which oscillates
        p += 0.1 * d;
        float r = 0.2 / length(p);
        c[i] = r;
    }

    gl_FragColor = vec4(c, 1.0);
}
