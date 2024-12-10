const arabicToEnglishNumbers = (arabicNumber) => {
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let englishNumber = "";
  for (let i = 0; i < arabicNumber?.length; i++) {
    const index = arabicNumbers.indexOf(arabicNumber[i]);
    if (index !== -1) {
      englishNumber += englishNumbers[index];
    } else {
      englishNumber += arabicNumber[i];
    }
  }
  return englishNumber;
};

// const arabicToEnglishNumbers = (arabicNumber) => {
//   const arabicToEnglishMap = {
//     "٠": "0",
//     "١": "1",
//     "٢": "2",
//     "٣": "3",
//     "٤": "4",
//     "٥": "5",
//     "٦": "6",
//     "٧": "7",
//     "٨": "8",
//     "٩": "9",
//   };

//   return arabicNumber
//     ?.split("")
//     .map((char) => arabicToEnglishMap[char] || char)
//     .join("");
// };

console.log(arabicToEnglishNumbers("+٩٧٢٥٦٩٩٩٦٩"));
