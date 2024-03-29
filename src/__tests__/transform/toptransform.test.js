import { TrUtils } from "../../image/transformer/TrUtils";

describe("TrUtils Top Transform Tests", () => {
  test("Top transform should scale up", () => {
    const rect = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      translateX: 0,
      translateY: 0,
      scaledWidth: 100,
      scaledHeight: 100
    };

    for (let i = 49; i > -50; i--) {
      const mouseEvent = { clientY: i };
      const containerRect = { top: 50 };
      TrUtils.transformTop({ rect, containerRect, mouseEvent });
      expect(rect.x).toBe(50);
      expect(rect.y).toBe(50);
      expect(rect.translateX).toBe(0);
      expect(rect.translateY).toBe(-1 * (50 - i + 50));
      expect(rect.width).toBe(100);
      expect(rect.height).toBe(100);
      expect(rect.scaledWidth).toBe(100);
      expect(rect.scaledHeight).toBe(100 + (50 - i) + 50);
    }
  });

  test("Top transform should scale down", () => {
    const rect = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      translateX: 0,
      translateY: -50,
      scaledWidth: 100,
      scaledHeight: 200
    };

    for (let i = 0; i < 260; i++) {
      const mouseEvent = { clientY: i };
      const containerRect = { top: 50 };
      TrUtils.transformTop({ rect, containerRect, mouseEvent });
      expect(rect.x).toBe(50);
      expect(rect.y).toBe(50);
      expect(rect.translateX).toBe(0);
      expect(rect.width).toBe(100);
      expect(rect.height).toBe(100);
      expect(rect.scaledWidth).toBe(100);
      if (i <= 250) {
        expect(rect.translateY).toBe(-100 + i);
        expect(rect.scaledHeight).toBe(250 - i);
      } else {
        expect(rect.translateY).toBe(150);
        expect(rect.scaledHeight).toBe(0);
      }
    }
  });
});
