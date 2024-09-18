// DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  let finalArr = [];
  for (const word of x) {
    if (word == "good") finalArr.push(word);
  }
  return finalArr.length <= 2 && finalArr.length > 0
    ? "Publish!"
    : finalArr.length >= 2
    ? "I smell a series!"
    : finalArr.length == 0
    ? "Fail!"
    : "";
}
console.log(
  well(["bad", "good", "bad", "bad", "bad", "good", "bad", "bad", "bad", "bad"])
);
