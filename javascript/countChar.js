const Charlen = (str, char) => str.split("").filter((ch) => ch === char).length;

const containes2To4 = (str, char) =>
  Charlen(str, char) >= 2 && Charlen(str, char) <= 4;

console.log("🚀 ~ count ~ count:", containes2To4("ziad", "d"));
