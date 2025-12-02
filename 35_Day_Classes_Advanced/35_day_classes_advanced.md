<div align="center">
  <h1> 40 Days Of JavaScript: Advanced Classes</h1>
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

[<< Day 34](../34_Day_Modules/34_day_modules.md) | [Day 36 >>](../36_Day_Iterators_Generators/36_day_iterators_generators.md)

- [Day 35](#day-35)
  - [Advanced Classes](#advanced-classes)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [Testimony](#testimony)
  - [Support](#support)

# Day 35

## Advanced Classes

JavaScript classes provide a cleaner and more intuitive syntax for creating objects and dealing with inheritance. Advanced class features include static methods, getters/setters, and private fields.

### Static Methods and Properties

```js
class MathUtils {
  // Static method
  static add(a, b) {
    return a + b;
  }
  
  // Static property (ES2022)
  static PI = 3.14159;
  
  // Static getter
  static get MAX_VALUE() {
    return Number.MAX_SAFE_INTEGER;
  }
}

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.MAX_VALUE); // 9007199254740991
```

### Getters and Setters

```js
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  
  // Getter
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  
  // Setter
  set fullName(name) {
    const parts = name.split(' ');
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
  
  // Computed property names
  get [Symbol.toStringTag]() {
    return 'Person';
  }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // John Doe
person.fullName = 'Jane Smith';
console.log(person._firstName); // Jane
```

### Private Fields (ES2022)

```js
class BankAccount {
  // Private field
  #balance = 0;
  
  // Private method
  #validateAmount(amount) {
    return amount > 0;
  }
  
  constructor(initialBalance) {
    if (this.#validateAmount(initialBalance)) {
      this.#balance = initialBalance;
    }
  }
  
  // Public method to deposit
  deposit(amount) {
    if (this.#validateAmount(amount)) {
      this.#balance += amount;
      return this.#balance;
    }
    throw new Error('Invalid amount');
  }
  
  // Public method to get balance
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
console.log(account.getBalance()); // 100
account.deposit(50);
console.log(account.getBalance()); // 150
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

### Class Inheritance and Super

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
  
  static getSpecies() {
    return 'Animal';
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    super.speak(); // Call parent method
    console.log(`${this.name} barks.`);
  }
  
  static getSpecies() {
    return `Dog (${super.getSpecies()})`; // Call parent static method
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // Buddy makes a sound. Buddy barks.
console.log(Dog.getSpecies()); // Dog (Animal)
```

### Mixins Pattern

```js
// Mixin functions
const TimestampMixin = {
  created() {
    this.createdAt = new Date();
  },
  
  getAge() {
    return Date.now() - this.createdAt.getTime();
  }
};

const SerializableMixin = {
  serialize() {
    return JSON.stringify(this);
  },
  
  deserialize(json) {
    return JSON.parse(json);
  }
};

// Class using mixins
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.created(); // Call mixin method
  }
}

// Apply mixins
Object.assign(User.prototype, TimestampMixin, SerializableMixin);

const user = new User('John Doe', 'john@example.com');
console.log(user.serialize()); // Serialized user object
console.log(user.getAge()); // Age in milliseconds
```

## Exercises

### Exercise: Level 1

1. Create a class with static methods for mathematical calculations
2. Implement a class with getters and setters for validating property values
3. Create a class that uses private fields to encapsulate data

### Exercise: Level 2

1. Build a class hierarchy with inheritance and method overriding
2. Implement a singleton pattern using ES6 classes
3. Create a class that uses the mixin pattern for reusable functionality

### Exercise: Level 3

1. Build a complete ORM-like class system with relationships
2. Implement a decorator pattern using ES6 classes
3. Create a reactive data model using classes and proxies

🌕 You are making excellent progress. You've now mastered advanced JavaScript classes. You are 35 steps closer to becoming a JavaScript expert!

## Testimony

Now it is time to support the author by expressing your thoughts about the Author and 40DaysOfJavaScript challenge. You can leave your testimonial on this [link](https://www.linkedin.com/in/shubhamgundu/)

[<< Day 34](../34_Day_Modules/34_day_modules.md) | [Day 36 >>](../36_Day_Iterators_Generators/36_day_iterators_generators.md)