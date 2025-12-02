<div align="center">
  <h1> 40 Days Of JavaScript: Modules</h1>
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

[<< Day 33](../33_Day_Async_Await/33_day_async_await.md) | [Day 35 >>](../35_Day_Classes_Advanced/35_day_classes_advanced.md)

- [Day 34](#day-34)
  - [Modules](#modules)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [Testimony](#testimony)
  - [Support](#support)

# Day 34

## Modules

JavaScript modules allow you to break up your code into separate files, making it easier to maintain and organize. Modules are imported and exported using the `import` and `export` statements.

### Exporting Values

```js
// mathUtils.js
// Named exports
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}

// Default export
export default function subtract(a, b) {
  return a - b;
}
```

### Importing Values

```js
// main.js
// Import named exports
import { PI, add, multiply } from './mathUtils.js';

// Import default export
import subtract from './mathUtils.js';

// Import everything
import * as mathUtils from './mathUtils.js';

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
console.log(subtract(10, 3)); // 7
console.log(mathUtils.PI); // 3.14159
```

### Dynamic Imports

```js
// Dynamic imports for code splitting
async function loadModule() {
  try {
    const module = await import('./mathUtils.js');
    console.log(module.add(5, 7)); // 12
  } catch (error) {
    console.error('Failed to load module:', error);
  }
}
```

### Module Patterns

```js
// utils.js
// Exporting a class
export class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
}

// Exporting an object
export const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};

// Exporting a constant
export const MAX_USERS = 100;

// Exporting a function
export function formatDate(date) {
  return date.toISOString().split('T')[0];
}
```

### Aggregating Modules

```js
// helpers/index.js
// Re-exporting from other modules
export { default as apiHelper } from './apiHelper.js';
export { default as domHelper } from './domHelper.js';
export * from './constants.js'; // Export all named exports

// main.js
import { apiHelper, domHelper, SOME_CONSTANT } from './helpers/index.js';
```

## Exercises

### Exercise: Level 1

1. Create a module that exports utility functions for string manipulation
2. Import and use the string utility functions in another file
3. Create a module with both named and default exports

### Exercise: Level 2

1. Build a calculator module with basic arithmetic operations
2. Create a configuration module that exports application settings
3. Implement dynamic imports to load modules conditionally

### Exercise: Level 3

1. Build a modular application with separate modules for data, UI, and business logic
2. Implement a plugin system using dynamic imports
3. Create a module bundler simulation that combines multiple modules

🌕 You are making excellent progress. You've now mastered JavaScript modules for organizing your code. You are 34 steps closer to becoming a JavaScript expert!

## Testimony

Now it is time to support the author by expressing your thoughts about the Author and 40DaysOfJavaScript challenge. You can leave your testimonial on this [link](https://www.linkedin.com/in/shubhamgundu/)

[<< Day 33](../33_Day_Async_Await/33_day_async_await.md) | [Day 35 >>](../35_Day_Classes_Advanced/35_day_classes_advanced.md)