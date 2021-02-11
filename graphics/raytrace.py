import numpy as np
from numpy import dot, clip, power
from numpy.linalg import norm
from PIL import Image

def normalize(v):
    return v / norm(v)

class Sphere:
    def __init__(self, c, r):
        self.c = c
        self.r = r

    def isect(self, o, d):
        a = dot(d, d)
        b = 2 * dot(o-self.c, d)
        c = dot(o-self.c, o-self.c) - self.r*self.r

        delta = b*b - 4*a*c
        if delta < 0:
            return -1, None, None

        t = (-b - np.sqrt(delta)) / (2 * a)
        p = o + t * d
        n = normalize(p - self.c)
        return t, p, n

def shade(camera, position, normal, lights):

    # ambient
    color = 0.1 

    for light in lights:
        
        # diffuse
        tolight = normalize(light - position)
        ln = dot(tolight, normal)
        color += 0.5 * max(ln, 0)

        # specular
        if ln > 0:
            reflected = normalize(2 * ln * normal - tolight)
            rc = power(dot(reflected, normalize(camera)), 5)
            color += 0.5 * max(rc, 0)

    return clip(color, 0, 1)


H = 100
W = 130
D = max(H, W) / 2
canvas = np.zeros((H, W))

camera = np.array([0, 0, 5])
light = np.array([5, 5, -7])
sphere = Sphere(np.array([0, 0, -10]), 1)

for i in range(H):
    for j in range(W):
        pixel = np.array([(j - W/2) / D, -(i - H/2) / D, 1])
        t, position, normal = sphere.isect(camera, normalize(pixel - camera))
        if t > 0:
            color = shade(camera, position, normal, [light])
            canvas[i, j] = color

# pil_canvas = (255 * canvas)
# im = Image.fromarray(pil_canvas)
# im = im.convert("L")
# im.save("output.png")
