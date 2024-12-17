const obj1 = { a: 1, b: 2, c: 1 };
const obj2 = { a: 1, b: 1, c: 1 };
const obj3 = { a: 1, b: 1, c: 1 };
const com = (
  ob1: Record<string, number>,
  ob2: Record<string, number>
): boolean => Object.keys(ob1).every((key) => ob2[key]);

console.log(com(obj3, obj2));
