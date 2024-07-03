import {PixelRatio} from 'react-native';

export function pixelToUnit(sizePixel: number) {
  return PixelRatio.roundToNearestPixel(sizePixel / PixelRatio.get());
}
