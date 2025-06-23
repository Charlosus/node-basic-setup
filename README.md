# 🚀 Node Basic Starter

A basic starter template for Node.js projects, including ESLint, Prettier, Express.js, and local VS Code snippets.

---

## 📦 Features

- ✅ Node.js (ES Modules)
- ✅ Express.js setup included
- ✅ ESLint 9 with Flat Config
- ✅ Prettier configured to match ESLint rules
- ✅ Local VS Code snippets (`.vscode/snippets.code-snippets`)
- ✅ Handy scripts for linting and formatting

---

## 🔧 Installation

```bash
git clone https://github.com/Charlosus/node-basic-starter.git my-new-project
cd my-new-project
rm -rf .git
npm install
```

---

## 🛠 Available Scripts

```bash
npm run lint       # run ESLint check
npm run lint:fix   # auto-fix ESLint issues
npm run format     # format code using Prettier
```

---

## ✂️ VS Code Snippets

Defined in `.vscode/snippets.code-snippets`:
- `log` → `console.log('')`
- `expapp` → basic Express app setup
- `exproute` → Express route (`GET`, `POST`, etc.)
- `class` → ES6 class skeleton
- `tryc` → try/catch block
- and more...

---

## ✅ Example Express Server

```js
import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

## 🔗 Resources

- [ESLint Flat Config Docs](https://eslint.org/docs/latest/use/configure/)
- [Prettier Docs](https://prettier.io/docs/en/index.html)

---

## 🧙 Author

Created by [Charlosus](https://github.com/Charlosus)  
Click "Use this template" to start new projects quickly ⚡