/**
 * Calculates a linear interpolation from a smaller to a larger pixel size from a provided lower viewport boundary and higher viewport boundary.
 * @param {number} minPixelSize - The minimum pixel size you want to scale from.
 * @param {number} maxPixelSize - The maximum pixel size you want to scale to.
 * @param {number} [minVp=375] - The view port size in pixels you want to start scaling from.
 * @param {number} [maxVp=768] - The view port size in pixels you want to stop scaling at.
 * @returns {string} A clamp CSS function.
 */

export default function linearInterpolation(
  minPixelSize,
  maxPixelSize,
  minVp = 375,
  maxVp = 768
) {
  function convertToREM(pixel) {
    return pixel / 16;
  }

  const minPixelSizeRem = convertToREM(minPixelSize);
  const maxPixelSizeRem = convertToREM(maxPixelSize);
  const minVpRem = convertToREM(minVp);
  const maxVpRem = convertToREM(maxVp);

  const slope = (maxPixelSizeRem - minPixelSizeRem) / (maxVpRem - minVpRem);

  const yIntercept = minPixelSizeRem - slope * minVpRem;

  return `clamp(${minPixelSizeRem}rem, ${
    slope * 100
  }vw + ${yIntercept}rem, ${maxPixelSizeRem}rem)`;
}
