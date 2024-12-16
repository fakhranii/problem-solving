const getDate = (date = new Date()) => {
  const days = date.getDate();
  const month = date.getMonth() + 1;
  const years = date.getFullYear();

  return `${days}/${month}/${years}`;
};

console.log(getDate());
