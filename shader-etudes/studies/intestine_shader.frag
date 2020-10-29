#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 mouse;
varying vec2 vTexCoord;

float quadraticInOut(float t) {
  float p = 2.0 * t * t;
  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
}

void main() {
    vec2 coord = vTexCoord;
    float d = pow(1.0 - distance(mouse, coord), 5.0);
    vec3 flesh = vec3(255.0 / 255.0, 160.0 / 255.0, 182.0 / 255.0);
    vec3 color = mix(flesh, vec3(1.0), d);
    gl_FragColor = vec4(color, 1.0);
}
