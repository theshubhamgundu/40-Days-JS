<div align="center">
  <h1> 40 Days Of JavaScript: Advanced DOM</h1>
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

[<< Day 30](../30_Day_Mini_project_final/30_day_mini_project_final.md) | [Day 32 >>](../32_Day_Fetch_API/32_day_fetch_api.md)

- [Day 31](#day-31)
  - [Advanced DOM Topics](#advanced-dom-topics)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [Testimony](#testimony)
  - [Support](#support)

# Day 31

## Advanced DOM Topics

Today, we will explore advanced DOM manipulation techniques that go beyond the basics covered in earlier days.

### Element Positioning and Dimensions

Understanding how to measure and manipulate element positions and dimensions is crucial for creating dynamic UIs.

```js
// Get element dimensions
const element = document.querySelector('.my-element');
const rect = element.getBoundingClientRect();

console.log('Width:', rect.width);
console.log('Height:', rect.height);
console.log('Top:', rect.top);
console.log('Bottom:', rect.bottom);
console.log('Left:', rect.left);
console.log('Right:', rect.right);
```

### Custom Events

Custom events allow you to create your own event types for more flexible communication between components.

```js
// Create a custom event
const customEvent = new CustomEvent('myCustomEvent', {
  detail: { message: 'Hello from custom event!' }
});

// Listen for the custom event
document.addEventListener('myCustomEvent', (event) => {
  console.log(event.detail.message);
});

// Dispatch the custom event
document.dispatchEvent(customEvent);
```

### Intersection Observer API

The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

```js
// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible!');
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the element is visible
});

// Observe an element
const target = document.querySelector('.target-element');
observer.observe(target);
```

## Exercises

### Exercise: Level 1

1. Create a page with multiple elements and log their dimensions and positions
2. Implement a custom event system for a simple todo app
3. Use Intersection Observer to lazy load images

### Exercise: Level 2

1. Build a scroll progress indicator using element dimensions
2. Create a drag and drop interface using custom events
3. Implement infinite scrolling using Intersection Observer

### Exercise: Level 3

1. Build a parallax scrolling effect using element positioning
2. Create a custom notification system with custom events
3. Implement a virtualized list component using Intersection Observer

🌕 You are making excellent progress. You've now mastered advanced DOM manipulation techniques. You are 31 steps closer to becoming a JavaScript expert!

## Testimony

Now it is time to support the author by expressing your thoughts about the Author and 40DaysOfJavaScript challenge. You can leave your testimonial on this [link](https://www.linkedin.com/in/shubhamgundu/)

[<< Day 30](../30_Day_Mini_project_final/30_day_mini_project_final.md) | [Day 32 >>](../32_Day_Fetch_API/32_day_fetch_api.md)