<div align="center">
  <h1> 40 Days Of JavaScript: Async/Await</h1>
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

[<< Day 32](../32_Day_Fetch_API/32_day_fetch_api.md) | [Day 34 >>](../34_Day_Modules/34_day_modules.md)

- [Day 33](#day-33)
  - [Async/Await](#asyncawait)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [Testimony](#testimony)
  - [Support](#support)

# Day 33

## Async/Await

Async/await is a modern JavaScript feature that makes asynchronous code easier to read and write. It's built on top of Promises and provides a more synchronous-looking way to handle asynchronous operations.

### Basic Async Function

```js
// Basic async function
async function greet() {
  return 'Hello, World!';
}

// Calling async function
greet().then(message => console.log(message));
```

### Await in Async Functions

```js
// Using await to wait for a Promise
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Multiple Async Operations

```js
// Running multiple async operations sequentially
async function fetchMultiplePosts() {
  try {
    const post1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const postData1 = await post1.json();
    
    const post2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const postData2 = await post2.json();
    
    console.log('Post 1:', postData1);
    console.log('Post 2:', postData2);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Parallel Async Operations

```js
// Running multiple async operations in parallel
async function fetchPostsParallel() {
  try {
    const [post1, post2, post3] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts/1'),
      fetch('https://jsonplaceholder.typicode.com/posts/2'),
      fetch('https://jsonplaceholder.typicode.com/posts/3')
    ]);
    
    const [postData1, postData2, postData3] = await Promise.all([
      post1.json(),
      post2.json(),
      post3.json()
    ]);
    
    console.log('Post 1:', postData1);
    console.log('Post 2:', postData2);
    console.log('Post 3:', postData3);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Error Handling with Try/Catch

```js
// Proper error handling with try/catch
async function robustAsyncFunction() {
  try {
    const response = await fetch('https://invalid-url-that-does-not-exist.com');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Network error:', error.message);
    } else {
      console.error('Other error:', error.message);
    }
    // Return a default value or rethrow
    return null;
  }
}
```

## Exercises

### Exercise: Level 1

1. Convert a Promise-based function to use async/await
2. Create an async function that fetches and displays user data
3. Handle errors in an async function using try/catch

### Exercise: Level 2

1. Build a function that fetches data from multiple APIs sequentially
2. Create a function that fetches data from multiple APIs in parallel
3. Implement retry logic for failed API requests

### Exercise: Level 3

1. Build a complete async data processing pipeline
2. Implement a queue system for managing async operations
3. Create a caching mechanism for async results

🌕 You are making excellent progress. You've now mastered async/await for handling asynchronous operations. You are 33 steps closer to becoming a JavaScript expert!

## Testimony

Now it is time to support the author by expressing your thoughts about the Author and 40DaysOfJavaScript challenge. You can leave your testimonial on this [link](https://www.linkedin.com/in/shubhamgundu/)

[<< Day 32](../32_Day_Fetch_API/32_day_fetch_api.md) | [Day 34 >>](../34_Day_Modules/34_day_modules.md)