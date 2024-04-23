// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  // ? first solution
  //   const lastStr = str.toLowerCase();
  //   let xs = "";
  //   let os = "";
  //   for (let i = 0; i < lastStr.length; i++) {
  //     if (lastStr[i] == "x") {
  //       xs += "x";
  //     } else if (lastStr[i] == "o") {
  //       os += "o";
  //     }
  //   }
  //   return xs.length == os.length;

  return (
    str.split("").filter((n) => n.toLowerCase() == "x").length ==
    str.split("").filter((n) => n.toLowerCase() == "o").length
  );
}

console.log(XO("xxOo")); //true
