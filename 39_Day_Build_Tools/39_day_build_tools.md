<div align="center">
  <h1> 40 Days Of JavaScript: Build Tools</h1>
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

[<< Day 38](../38_Day_Web_Components/38_day_web_components.md) | [Day 40 >>](../40_Day_Final_Project/40_day_final_project.md)

- [Day 39](#day-39)
  - [Build Tools](#build-tools)
  - [Exercises](#exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [Testimony](#testimony)
  - [Support](#support)

# Day 39

## Build Tools

Build tools automate repetitive tasks in the development process, such as minification, compilation, unit testing, and deployment. Popular JavaScript build tools include Webpack, Rollup, Parcel, and Vite.

### Package.json Scripts

```json
{
  "name": "my-javascript-project",
  "version": "1.0.0",
  "description": "A sample JavaScript project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack --mode production",
    "test": "jest",
    "lint": "eslint src/**/*.js",
    "format": "prettier --write src/**/*.js",
    "clean": "rimraf dist"
  },
  "devDependencies": {
    "webpack": "^5.0.0",
    "webpack-cli": "^4.0.0",
    "jest": "^27.0.0",
    "eslint": "^8.0.0",
    "prettier": "^2.0.0"
  }
}
```

### Webpack Configuration

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  
  devServer: {
    static: './dist',
    open: true,
    hot: true
  },
  
  mode: 'development'
};
```

### Babel Configuration

```js
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions']
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods'
  ]
};
```

### ESLint Configuration

```js
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars': 'warn',
    'no-console': 'off'
  }
};
```

### Simple Build Script

```js
// build.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Copy HTML file
fs.copyFileSync(
  path.join(__dirname, 'src', 'index.html'),
  path.join(distDir, 'index.html')
);

// Minify JavaScript (using terser)
execSync('npx terser src/index.js -o dist/bundle.min.js -c -m', {
  stdio: 'inherit'
});

// Minify CSS (using csso)
execSync('npx csso src/style.css dist/style.min.css', {
  stdio: 'inherit'
});

console.log('Build completed successfully!');
```

## Exercises

### Exercise: Level 1

1. Set up a basic package.json with common development scripts
2. Configure ESLint for a JavaScript project
3. Create a simple build script that copies files to a dist folder

### Exercise: Level 2

1. Configure Webpack to bundle a simple JavaScript application
2. Set up Babel to transpile modern JavaScript to older versions
3. Implement a development server with live reloading

### Exercise: Level 3

1. Create a complete build pipeline with Webpack, Babel, and PostCSS
2. Implement code splitting and lazy loading in your build configuration
3. Set up continuous integration with automated testing and deployment

🌕 You are making excellent progress. You've now mastered build tools for automating development workflows. You are 39 steps closer to becoming a JavaScript expert!

## Testimony

Now it is time to support the author by expressing your thoughts about the Author and 40DaysOfJavaScript challenge. You can leave your testimonial on this [link](https://www.linkedin.com/in/shubhamgundu/)

[<< Day 38](../38_Day_Web_Components/38_day_web_components.md) | [Day 40 >>](../40_Day_Final_Project/40_day_final_project.md)