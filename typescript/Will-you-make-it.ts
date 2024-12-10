export const zeroFuel = (
  distance: number,
  mpg: number,
  fuelLeft: number
): boolean => {
  //   throw new Error("Not implemented");
  return  mpg * fuelLeft >= distance  ? true : false;
};
// the gas station is 50 miles away
// the car has 25 miles per gallon and there are 2 gallons left

console.log(zeroFuel(50, 25, 2));
