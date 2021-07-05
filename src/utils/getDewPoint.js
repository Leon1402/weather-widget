export const getDewPoint = (temp, hum) => {
  const a = 17.27
  const b = 237.7
  const func = () => (a * temp) / (b + temp) + Math.log(hum / 100)
  
  return Math.round((b * func())/(a-func()))
}