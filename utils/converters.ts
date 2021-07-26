const metersConverter = require('meters')

export const quilometerToMeter = (value: string): number => {
  return metersConverter(value)
}
