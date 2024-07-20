function longest(s1, s2) {
  const str = [...(s1 + s2)].sort();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push(str[i]);
    }
  }
  return arr.join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
