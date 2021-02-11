let s;

function preload() {
  s = loadShader("shader.vert", "shader.frag");
}

function setup() {
  createCanvas(640, 640, WEBGL);
}

function draw() {
  shader(s);
  s.setUniform("u_resolution", [width, height]);
  s.setUniform("u_mouse", [mouseX, height - mouseY]);
  s.setUniform("u_time", millis() / 1000.0);
  rect(0, 0, width, height);
}
