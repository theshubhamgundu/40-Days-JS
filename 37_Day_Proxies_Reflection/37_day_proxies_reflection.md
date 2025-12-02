<div align="center">
  <h1> 40 Days Of JavaScript: Proxies and Reflection</h1>
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

[<< Day 36](../36_Day_Iterators_Generators/36_day_iterators_generators.md) | [Day 38 >>](../38_Day_Web_Components/38_day_web_components.md)

- [Day 37](#day-37)
  - [Proxies and Reflection](#proxies-and-reflection)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [Testimony](#testimony)
  - [Support](#support)

# Day 37

## Proxies and Reflection

Proxies allow you to intercept and customize operations performed on objects. The Reflect API provides methods for interceptable JavaScript operations.

### Proxy Basics

```js
// Basic proxy
const target = {
  name: 'John',
  age: 30
};

const handler = {
  get(obj, prop) {
    console.log(`Getting property: ${prop}`);
    return obj[prop];
  },
  
  set(obj, prop, value) {
    console.log(`Setting property: ${prop} = ${value}`);
    obj[prop] = value;
    return true;
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.name); // Getting property: name \n John
proxy.age = 31; // Setting property: age = 31
```

### Validation with Proxies

```js
// Input validation proxy
function createValidatedObject(schema) {
  return new Proxy({}, {
    set(obj, prop, value) {
      if (schema[prop]) {
        const validator = schema[prop];
        if (validator(value)) {
          obj[prop] = value;
          return true;
        } else {
          throw new Error(`Invalid value for ${prop}: ${value}`);
        }
      }
      obj[prop] = value;
      return true;
    }
  });
}

const userSchema = {
  name: value => typeof value === 'string' && value.length > 0,
  age: value => typeof value === 'number' && value >= 0,
  email: value => typeof value === 'string' && value.includes('@')
};

const user = createValidatedObject(userSchema);
user.name = 'John Doe'; // Valid
user.age = 30; // Valid
user.email = 'john@example.com'; // Valid
// user.age = -5; // Throws error: Invalid value for age: -5
```

### Property Access Logging

```js
// Property access logging proxy
function createLoggingProxy(obj, logger = console.log) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      logger(`GET: ${prop}`);
      return Reflect.get(target, prop, receiver);
    },
    
    set(target, prop, value, receiver) {
      logger(`SET: ${prop} = ${value}`);
      return Reflect.set(target, prop, value, receiver);
    },
    
    has(target, prop) {
      logger(`HAS: ${prop}`);
      return Reflect.has(target, prop);
    }
  });
}

const data = { x: 1, y: 2 };
const loggedData = createLoggingProxy(data);
console.log('x' in loggedData); // HAS: x \n true
loggedData.z = 3; // SET: z = 3
console.log(loggedData.x); // GET: x \n 1
```

### Reflect API

```js
// Using Reflect API
const obj = { name: 'John' };

// Equivalent to obj.name
console.log(Reflect.get(obj, 'name')); // John

// Equivalent to obj.age = 30
Reflect.set(obj, 'age', 30);
console.log(obj.age); // 30

// Equivalent to 'name' in obj
console.log(Reflect.has(obj, 'name')); // true

// Equivalent to delete obj.name
Reflect.deleteProperty(obj, 'name');
console.log(obj.name); // undefined

// Constructing objects
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person = Reflect.construct(Person, ['Jane']);
console.log(person.name); // Jane
```

### Advanced Proxy Patterns

```js
// Immutable proxy
function createImmutableProxy(obj) {
  return new Proxy(obj, {
    set() {
      throw new Error('Cannot modify immutable object');
    },
    
    deleteProperty() {
      throw new Error('Cannot delete properties from immutable object');
    }
  });
}

const config = { theme: 'dark', language: 'en' };
const immutableConfig = createImmutableProxy(config);
// immutableConfig.theme = 'light'; // Throws error

// Virtual properties proxy
const virtualProxy = new Proxy({}, {
  get(obj, prop) {
    if (prop === 'timestamp') {
      return Date.now();
    }
    
    if (prop === 'random') {
      return Math.random();
    }
    
    return obj[prop];
  }
});

console.log(virtualProxy.timestamp); // Current timestamp
console.log(virtualProxy.random); // Random number
```

## Exercises

### Exercise: Level 1

1. Create a proxy that logs all property accesses
2. Implement a proxy that prevents modification of object properties
3. Build a proxy that validates data types for object properties

### Exercise: Level 2

1. Create a proxy that implements a simple cache for computed properties
2. Build a proxy that automatically converts property names to a specific case (camelCase, snake_case, etc.)
3. Implement a proxy that tracks object changes and provides an undo mechanism

### Exercise: Level 3

1. Build a reactive data system using proxies (similar to Vue.js reactivity)
2. Create a database-like proxy that validates and sanitizes data before storage
3. Implement a proxy that provides automatic serialization/deserialization for API communication

🌕 You are making excellent progress. You've now mastered proxies and reflection for metaprogramming. You are 37 steps closer to becoming a JavaScript expert!

## Testimony

Now it is time to support the author by expressing your thoughts about the Author and 40DaysOfJavaScript challenge. You can leave your testimonial on this [link](https://www.linkedin.com/in/shubhamgundu/)

[<< Day 36](../36_Day_Iterators_Generators/36_day_iterators_generators.md) | [Day 38 >>](../38_Day_Web_Components/38_day_web_components.md)