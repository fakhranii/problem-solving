/**
 Write a function createCounter. It should accept an initial integer init. 
 It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0

Constraints:

-1000 <= init <= 1000
0 <= calls.length <= 1000
calls[i] is one of "increment", "decrement" and "reset"
 */
type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let current = init;

  return {
    increment: function increment(): number {
      current = current += 1;
      return current;
    },
    reset: function reset(): number {
      return (current = init);
    },
    decrement: function decrement(): number {
      current = current -= 1;
      return current;
    },
  };
}

const counter1 = createCounter(5);
// counter1.increment(); // 6
// counter1.reset(); // 5
// counter1.decrement(); // 4

console.log("🚀 ~ counter1.increment():", counter1.increment());
console.log("🚀 ~ counter1.reset():", counter1.reset());
console.log("🚀 ~ counter1.decrement():", counter1.decrement());
