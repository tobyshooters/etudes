#ifdef GL_ES
precision mediump float;
#endif

attribute vec3 aPosition;
attribute vec2 aTexCoord;
uniform vec2 mouse;
varying vec2 vTexCoord;

float quadraticInOut(float t) {
  float p = 2.0 * t * t;
  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
}

void main() {
    vTexCoord = aTexCoord;
    vec4 positionVec4 = vec4(aPosition, 1.0);
    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

    float d = pow(1.0 - distance(mouse, aTexCoord), 5.0);
    positionVec4.z -= d;

    gl_Position = positionVec4;
}
