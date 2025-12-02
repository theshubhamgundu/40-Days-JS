<div align="center">
  <h1> 40 Days Of JavaScript: Fetch API</h1>
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

[<< Day 31](../31_Day_Advanced_DOM/31_day_advanced_dom.md) | [Day 33 >>](../33_Day_Async_Await/33_day_async_await.md)

- [Day 32](#day-32)
  - [Fetch API](#fetch-api)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [Testimony](#testimony)
  - [Support](#support)

# Day 32

## Fetch API

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

### Basic Fetch Usage

```js
// Simple GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### POST Request with Fetch

```js
// POST request with JSON data
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'My New Post',
    body: 'This is the content of my post',
    userId: 1,
  }),
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

### Async/Await with Fetch

```js
// Using async/await with fetch
async function fetchPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Handling Different Response Types

```js
// Handling different response types
async function fetchUserData() {
  try {
    // Text response
    const textResponse = await fetch('https://httpbin.org/html');
    const textData = await textResponse.text();
    console.log('Text:', textData);
    
    // JSON response
    const jsonResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const jsonData = await jsonResponse.json();
    console.log('JSON:', jsonData);
    
    // Blob response (for images, files, etc.)
    const blobResponse = await fetch('https://httpbin.org/image/png');
    const blobData = await blobResponse.blob();
    console.log('Blob:', blobData);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Exercises

### Exercise: Level 1

1. Make a GET request to fetch a list of posts from JSONPlaceholder
2. Display the titles of the first 5 posts in the console
3. Make a POST request to create a new post

### Exercise: Level 2

1. Create a simple web page that displays posts from an API
2. Implement error handling for network requests
3. Add loading indicators while fetching data

### Exercise: Level 3

1. Build a complete CRUD application using the Fetch API
2. Implement caching to avoid unnecessary requests
3. Add offline support using service workers

🌕 You are making excellent progress. You've now mastered the Fetch API for making HTTP requests. You are 32 steps closer to becoming a JavaScript expert!

## Testimony

Now it is time to support the author by expressing your thoughts about the Author and 40DaysOfJavaScript challenge. You can leave your testimonial on this [link](https://www.linkedin.com/in/shubhamgundu/)

[<< Day 31](../31_Day_Advanced_DOM/31_day_advanced_dom.md) | [Day 33 >>](../33_Day_Async_Await/33_day_async_await.md)