function printInfo(name, gender) {
  if (gender == "male") {
    console.log(`hello mr ${name}`);
  } else {
    console.log(`hello mrs ${name}`);
  }
  return true;
}
console.log(printInfo("hanen", "female"));
console.log(printInfo("ziad", "male"));
