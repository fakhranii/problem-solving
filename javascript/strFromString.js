const strFromStr = (str) =>
  str.length > 3 ? str.slice(0, 3) + str.slice(-3) : str;

console.log("🚀 ~ strFromStr:", strFromStr("ziad"));
console.log("🚀 ~ strFromStr:", strFromStr("zia"));
