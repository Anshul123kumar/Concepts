import { Dimensions, Platform } from 'react-native';
import { isTablet } from 'react-native-device-info';

/**
 * Base dimensions is according to iPhone 13
 * Update it according to the designs provided
 */
const BASE_DIMENSIONS = {
  mobile: {
    width: 390,
    height: 844,
  },
  tablet: {
    width: 600,
    height: 1024,
  },
};

// Guideline sizes are based on iPhonw 13 screen mobile device
const guidelineBaseWidth = BASE_DIMENSIONS.mobile.width;
const guidelineBaseHeight = BASE_DIMENSIONS.mobile.height;
const { width, height } = Dimensions.get('window');
const updatedHeight = height;
const updatedWidth = width;

const normalizedWidth = (size) => (updatedWidth / guidelineBaseWidth) * size;
const normalizedHeight = (size) => (updatedHeight / guidelineBaseHeight) * size;

/**
 * scale: For normalizing the fontSize Ex: fontSize: scale(10)
 * verticalScale: For normalizing the height, marginVertical, paddingVertical. Ex: height: verticalScale(30)
 * moderateScale: For normalizing the width, marginHorizontal, paddingHorizontal. Ex: width: verticalScale(20)
 * lineHeightScale: For normalizing line height.
 * Ex: lineHeight: lineHeightScale(10, 12 / 10) - fontSize, lineHeight/fontSize
 */

const scale = (size) =>
  Platform.isPad || isTablet()
    ? normalizedWidth(size - 4) // added this as the font size for ipad and tablet is too large
    : normalizedWidth(size);
const verticalScale = (size) => normalizedHeight(size);
const moderateScale = (size, factor = 0.5) =>
  size + (normalizedWidth(size) - size) * factor;
const lineHeightScale = (fontSize, factor = 1.2) =>
  Math.ceil(normalizedHeight(fontSize * factor));

export { scale, verticalScale, moderateScale, lineHeightScale };