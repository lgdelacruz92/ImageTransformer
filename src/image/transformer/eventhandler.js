import { TrUtils } from "./trutils";

export const useEventHandlers = props => {
  const { setState } = props;
  const onMouseMove = e => {
    setState(s => {
      if (s.topRightTransforming) {
        TrUtils.transformTopRight({ rect: s.rect, mouseEvent: e });
        return { ...s };
      } else if (s.rightTransforming) {
        TrUtils.transformRight({ rect: s.rect, mouseEvent: e });
        return { ...s };
      } else if (s.topTransforming) {
        TrUtils.transformTop({ rect: s.rect, mouseEvent: e });
        return { ...s };
      } else if (s.bottomTransforming) {
        TrUtils.transformBottom({ rect: s.rect, mouseEvent: e });
        return { ...s };
      } else if (s.bottomRightTransforming) {
        TrUtils.transformBottomRight({ rect: s.rect, mouseEvent: e });
        return { ...s };
      } else if (s.leftTransforming) {
        TrUtils.transformLeft({ rect: s.rect, mouseEvent: e });
        return { ...s };
      } else {
        return { ...s };
      }
    });
    e.preventDefault();
  };

  const onMouseUp = e => {
    setState(s => {
      if (s.topRightTransforming) {
        return { ...s, topRightTransforming: false };
      } else if (s.rightTransforming) {
        return { ...s, rightTransforming: false };
      } else if (s.topTransforming) {
        return { ...s, topTransforming: false };
      } else if (s.bottomTransforming) {
        return { ...s, bottomTransforming: false };
      } else if (s.bottomRightTransforming) {
        return { ...s, bottomRightTransforming: false };
      } else if (s.leftTransforming) {
        return { ...s, leftTransforming: false };
      } else {
        return { ...s };
      }
    });
    e.preventDefault();
  };

  return [onMouseMove, onMouseUp];
};
