<div align="center">
  <h1> 40 Days Of JavaScript: Web Components</h1>
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

[<< Day 37](../37_Day_Proxies_Reflection/37_day_proxies_reflection.md) | [Day 39 >>](../39_Day_Build_Tools/39_day_build_tools.md)

- [Day 38](#day-38)
  - [Web Components](#web-components)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [Testimony](#testimony)
  - [Support](#support)

# Day 38

## Web Components

Web Components are a set of web platform APIs that allow you to create new HTML tags with encapsulated functionality. They consist of Custom Elements, Shadow DOM, and HTML Templates.

### Custom Elements

```js
// Basic custom element
class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '<button>Click me!</button>';
  }
}

// Define the custom element
customElements.define('custom-button', CustomButton);

// Usage in HTML:
// <custom-button></custom-button>
```

### Custom Elements with Attributes

```js
// Custom element with attributes
class UserInfoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  static get observedAttributes() {
    return ['name', 'email', 'avatar'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
  
  render() {
    const name = this.getAttribute('name') || 'Unknown';
    const email = this.getAttribute('email') || 'No email';
    const avatar = this.getAttribute('avatar') || 'default-avatar.png';
    
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          max-width: 300px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
        }
        .name {
          font-size: 1.2em;
          font-weight: bold;
          margin: 8px 0;
        }
        .email {
          color: #666;
        }
      </style>
      <div class="card">
        <img class="avatar" src="${avatar}" alt="${name}">
        <div class="name">${name}</div>
        <div class="email">${email}</div>
      </div>
    `;
  }
}

customElements.define('user-info-card', UserInfoCard);

// Usage in HTML:
// <user-info-card 
//   name="John Doe" 
//   email="john@example.com" 
//   avatar="john.jpg">
// </user-info-card>
```

### Shadow DOM

```js
// Shadow DOM example
class ThemedButton extends HTMLElement {
  constructor() {
    super();
    
    // Attach shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Create button element
    const button = document.createElement('button');
    button.textContent = this.textContent || 'Themed Button';
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      button {
        background: #007bff;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background 0.3s;
      }
      
      button:hover {
        background: #0056b3;
      }
      
      button:active {
        transform: translateY(1px);
      }
    `;
    
    // Append elements to shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(button);
  }
}

customElements.define('themed-button', ThemedButton);

// Usage in HTML:
// <themed-button>Click Me</themed-button>
```

### HTML Templates

```js
// Using HTML templates
class TodoList extends HTMLElement {
  constructor() {
    super();
    
    // Create template if it doesn't exist
    if (!TodoList.template) {
      TodoList.template = document.createElement('template');
      TodoList.template.innerHTML = `
        <style>
          .todo-list {
            max-width: 400px;
            margin: 0 auto;
          }
          
          .todo-item {
            display: flex;
            align-items: center;
            padding: 12px;
            border-bottom: 1px solid #eee;
          }
          
          .todo-text {
            flex: 1;
            margin: 0 12px;
          }
          
          .completed .todo-text {
            text-decoration: line-through;
            color: #999;
          }
        </style>
        
        <div class="todo-list">
          <slot name="header">
            <h2>My Todo List</h2>
          </slot>
          <div id="items"></div>
          <slot name="footer"></slot>
        </div>
      `;
    }
    
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(
      TodoList.template.content.cloneNode(true)
    );
    
    this.items = [];
  }
  
  addItem(text) {
    const item = { id: Date.now(), text, completed: false };
    this.items.push(item);
    this.renderItems();
  }
  
  renderItems() {
    const container = this.shadowRoot.getElementById('items');
    container.innerHTML = '';
    
    this.items.forEach(item => {
      const div = document.createElement('div');
      div.className = `todo-item ${item.completed ? 'completed' : ''}`;
      div.innerHTML = `
        <input type="checkbox" ${item.completed ? 'checked' : ''}>
        <span class="todo-text">${item.text}</span>
        <button>Remove</button>
      `;
      
      container.appendChild(div);
    });
  }
}

customElements.define('todo-list', TodoList);

// Usage in HTML:
// <todo-list>
//   <h2 slot="header">My Tasks</h2>
//   <div slot="footer">Total: <span id="count">0</span> tasks</div>
// </todo-list>
```

## Exercises

### Exercise: Level 1

1. Create a custom element that displays a greeting message
2. Build a custom element that shows the current time and updates every second
3. Implement a custom element that creates a simple progress bar

### Exercise: Level 2

1. Create a tabbed interface component using Web Components
2. Build a modal dialog component with open/close functionality
3. Implement a data table component that accepts JSON data

### Exercise: Level 3

1. Build a complete form validation component with custom validation rules
2. Create a charting component that visualizes data using Canvas API
3. Implement a drag-and-drop file upload component

🌕 You are making excellent progress. You've now mastered Web Components for building reusable UI elements. You are 38 steps closer to becoming a JavaScript expert!

## Testimony

Now it is time to support the author by expressing your thoughts about the Author and 40DaysOfJavaScript challenge. You can leave your testimonial on this [link](https://www.linkedin.com/in/shubhamgundu/)

[<< Day 37](../37_Day_Proxies_Reflection/37_day_proxies_reflection.md) | [Day 39 >>](../39_Day_Build_Tools/39_day_build_tools.md)