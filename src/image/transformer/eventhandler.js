import { TrUtils } from "./trutils";

export const handleTransform = (e, containerRef, s) => {
  const containerRect = containerRef.current.getBoundingClientRect();
  if (s.targetId === "top-right-tr") {
    TrUtils.transformTopRight({ rect: s.data, containerRect, mouseEvent: e });
    return { ...s.data };
  } else if (s.targetId === "right-tr") {
    TrUtils.transformRight({ rect: s.data, containerRect, mouseEvent: e });
    return { ...s.data };
  } else if (s.targetId === "top-tr") {
    TrUtils.transformTop({ rect: s.data, containerRect, mouseEvent: e });
    return { ...s.data };
  } else if (s.targetId === "bottom-tr") {
    TrUtils.transformBottom({ rect: s.data, containerRect, mouseEvent: e });
    return { ...s.data };
  } else if (s.targetId === "bottom-right-tr") {
    TrUtils.transformBottomRight({
      rect: s.data,
      containerRect,
      mouseEvent: e
    });
    return { ...s.data };
  } else if (s.targetId === "left-tr") {
    TrUtils.transformLeft({ rect: s.data, containerRect, mouseEvent: e });
    return { ...s.data };
  } else if (s.targetId === "bottom-left-tr") {
    TrUtils.transformBottomLeft({ rect: s.data, containerRect, mouseEvent: e });
    return { ...s.data };
  } else if (s.targetId === "top-left-tr") {
    TrUtils.transformTopLeft({ rect: s.data, containerRect, mouseEvent: e });
    return { ...s.data };
  } else {
    return { ...s.data };
  }
};
