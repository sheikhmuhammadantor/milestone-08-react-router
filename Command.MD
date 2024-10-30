# Command

```bash
npm create vite@latest my-project -- --template react

cd my-project

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

npm install react-router-dom

npm i -D daisyui@latest

```

```js
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

 @tailwind base;
 @tailwind components;
 @tailwind utilities;

  plugins: [
    require('daisyui'),
  ],

```
