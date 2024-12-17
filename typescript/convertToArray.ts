const arrayConvert = (str: string): string[][] => {
  return str.split("\n").map((row) => row.split(","));
};
let str = `fjh,jd,ffd
fhkd,fff,sf
sdf,gfds,fgd`;
console.log(arrayConvert(str));
// amnd,dsf,fdsdf,
