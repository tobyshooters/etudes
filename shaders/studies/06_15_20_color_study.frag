precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    // https://www.desmos.com/calculator/llqzkggxhr
    // a is translation, b is shift
    // (a, b) = (0.5, 0.5) centers cosine into (0, 1) range
    // c is the frequeny within (0, 1) range
    // d shifts the sine wave horizontally
    return a + b * cos(6.28318 * (c * t + d));
}

float plot(vec2 st, float pct) {
    return float(abs(st.y - pct) < 0.005);
}

#define HEIGHT 0.498

void main() {
    vec2 st = gl_FragCoord.xy / (2.0 * u_resolution);
    vec2 ms = u_mouse / (u_resolution);

    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(2.0, 1.0, 0.0);
    vec3 d = vec3(0.2*u_time, 0.75, 0.1);
    vec3 color = palette(st.x, a, b, c, d);
    
    if (st.y > 1.0-HEIGHT) {
        gl_FragColor = vec4(color, 1.0);
    }
    else if (st.y < HEIGHT) {
        vec3 plotColor = vec3(253.0/255.0, 246.0/255.0, 227.0/255.0);
        vec3 scaledColor = HEIGHT * (0.95 * color + 0.025);
        plotColor = mix(plotColor, vec3(1.0, 0.0, 0.0), plot(st, scaledColor.r));
        plotColor = mix(plotColor, vec3(0.0, 1.0, 0.0), plot(st, scaledColor.g));
        plotColor = mix(plotColor, vec3(0.0, 0.0, 1.0), plot(st, scaledColor.b));
        gl_FragColor = vec4(plotColor, 1.0);
    }
    else {
        vec3 splitColor = vec3(0.0);
        gl_FragColor = vec4(splitColor, 1.0);
    }

}
