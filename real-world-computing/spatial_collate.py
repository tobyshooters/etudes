import sys
import numpy as np
import cv2
from collections import defaultdict
from PIL import Image, ImageFilter
from tesserocr import PyTessBaseAPI, RIL, OEM

results = []
image = Image.open(sys.argv[1])

with PyTessBaseAPI(oem=OEM.LSTM_ONLY, lang="eng") as api:
    api.SetImage(image)
    boxes = api.GetComponentImages(RIL.WORD, True)

    for i, (img, box, _, _) in enumerate(boxes):
        side = 20
        api.SetRectangle(box['x']-side//2, box['y']-side//2, box['w']+side, box['h']+side)
        text = api.GetUTF8Text().strip()

        if text.find(".jpg") != -1:
            results.append((box['x'], box['y'], text.strip()))
            # img.save(f"{i}.png")

for (x, y, t) in results:
    print(f"Found {t} at x: {x}, y: {y}")

rows = defaultdict(list)
for (x, y, t) in results:
    rows[30 * (y // 30)].append((x, y, t))

for k, row in rows.items():
    rows[k] = sorted(row, key=lambda e: e[0])

img = np.vstack([
    np.hstack([
        cv2.resize(cv2.imread(t), (960, 540))
        for (x, y, t) in row
    ])
    for _, row in rows.items()
])

cv2.imwrite("composite.jpg", img)
