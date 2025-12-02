<div align="center">
  <h1> 40 Days Of JavaScript: Iterators and Generators</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/shubhamgundu/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

  <sub>Author:
  <a href="https://www.linkedin.com/in/shubhamgundu/" target="_blank">shubham gundu</a><br>
  <small> October, 2025</small>
  </sub>
</div>

<div>

</div>

[<< Day 35](../35_Day_Classes_Advanced/35_day_classes_advanced.md) | [Day 37 >>](../37_Day_Proxies_Reflection/37_day_proxies_reflection.md)

- [Day 36](#day-36)
  - [Iterators and Generators](#iterators-and-generators)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [Testimony](#testimony)
  - [Support](#support)

# Day 36

## Iterators and Generators

Iterators and generators provide powerful ways to work with sequences of data. Iterators define how to traverse a collection, while generators are functions that can pause and resume execution.

### Iterators

```js
// Custom iterator
class NumberIterator {
  constructor(max) {
    this.max = max;
  }
  
  [Symbol.iterator]() {
    let current = 0;
    const max = this.max;
    
    return {
      next() {
        if (current <= max) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

const numbers = new NumberIterator(5);
for (const num of numbers) {
  console.log(num); // 0, 1, 2, 3, 4, 5
}
```

### Built-in Iterators

```js
// Array iterator
const arr = [1, 2, 3];
const arrIterator = arr[Symbol.iterator]();
console.log(arrIterator.next()); // { value: 1, done: false }
console.log(arrIterator.next()); // { value: 2, done: false }
console.log(arrIterator.next()); // { value: 3, done: false }
console.log(arrIterator.next()); // { value: undefined, done: true }

// String iterator
const str = 'hello';
for (const char of str) {
  console.log(char); // h, e, l, l, o
}

// Map iterator
const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key, value); // a 1, b 2
}
```

### Generators Basics

```js
// Basic generator function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Generator with parameters
function* counter(start = 0, step = 1) {
  let current = start;
  while (true) {
    yield current;
    current += step;
  }
}

const countGen = counter(10, 5);
console.log(countGen.next().value); // 10
console.log(countGen.next().value); // 15
console.log(countGen.next().value); // 20
```

### Advanced Generator Patterns

```js
// Generator delegation
function* generator1() {
  yield 1;
  yield 2;
}

function* generator2() {
  yield 3;
  yield 4;
}

function* combinedGenerator() {
  yield* generator1();
  yield* generator2();
  yield 5;
}

for (const value of combinedGenerator()) {
  console.log(value); // 1, 2, 3, 4, 5
}

// Generator with try/catch
function* errorHandlingGenerator() {
  try {
    yield 1;
    yield 2;
    throw new Error('Something went wrong!');
  } catch (error) {
    console.log('Caught error:', error.message);
    yield 3;
  }
}

const errorGen = errorHandlingGenerator();
console.log(errorGen.next()); // { value: 1, done: false }
console.log(errorGen.next()); // { value: 2, done: false }
console.log(errorGen.next()); // Caught error: Something went wrong! 
                              // { value: 3, done: false }
```

### Practical Generator Applications

```js
// Fibonacci sequence generator
function* fibonacci() {
  let prev = 0;
  let curr = 1;
  
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}

// Async generator
async function* asyncNumberGenerator() {
  for (let i = 1; i <= 3; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}

// Using async generator
(async () => {
  for await (const num of asyncNumberGenerator()) {
    console.log(num); // 1 (after 1s), 2 (after 1s), 3 (after 1s)
  }
})();
```

## Exercises

### Exercise: Level 1

1. Create a custom iterator for a range of numbers
2. Implement an iterator for a custom data structure (e.g., linked list)
3. Write a generator function that yields even numbers up to a limit

### Exercise: Level 2

1. Build a generator that implements the Fibonacci sequence
2. Create an async generator that fetches data from an API
3. Implement a generator that flattens nested arrays

### Exercise: Level 3

1. Build a reactive data stream using generators
2. Implement a cancellable async generator
3. Create a generator-based state machine

🌕 You are making excellent progress. You've now mastered iterators and generators for working with sequences. You are 36 steps closer to becoming a JavaScript expert!

## Testimony

Now it is time to support the author by expressing your thoughts about the Author and 40DaysOfJavaScript challenge. You can leave your testimonial on this [link](https://www.linkedin.com/in/shubhamgundu/)

[<< Day 35](../35_Day_Classes_Advanced/35_day_classes_advanced.md) | [Day 37 >>](../37_Day_Proxies_Reflection/37_day_proxies_reflection.md)