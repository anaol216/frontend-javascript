

# Frontend JavaScript – TypeScript Task 0

## Project Overview

This project demonstrates basic **TypeScript usage** for frontend development, including:

* Defining **interfaces**
* Creating **typed objects**
* Storing data in arrays
* Rendering content dynamically using **Vanilla JavaScript**

The goal of this task is to render a table of students and their locations in the browser using TypeScript, compiled and bundled with **Webpack**.

---
## Project Structure

```
frontend-javascript/
└─ 0x04-TypeScript/
   └─ task_0/
      ├─ js/
      │  └─ main.ts        # TypeScript code
      ├─ package.json       # Project dependencies
      ├─ tsconfig.json      # TypeScript configuration
      ├─ webpack.config.js  # Webpack configuration
      └─ .eslintrc.js       # ESLint configuration
```

---

## Features

1. **TypeScript Interface**

   * `Student` interface with the following properties:

     * `firstName` (string)
     * `lastName` (string)
     * `age` (number)
     * `location` (string)

2. **Student Array**

   * Two student objects are created and stored in a `studentsList` array.

3. **Dynamic Table Rendering**

   * Vanilla JavaScript is used to create a table and render each student's `firstName` and `location`.

4. **Webpack Integration**

   * TypeScript code is bundled using Webpack for browser usage.

---

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd frontend-javascript/0x04-TypeScript/task_0
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npx webpack serve
```

* The project will be available at `http://localhost:9000/`

4. Build for production:

```bash
npx webpack --mode production
```

---

## How It Works

* The `main.ts` file defines the `Student` interface and student objects.
* A table is created dynamically in the DOM using Vanilla JS.
* Webpack compiles the TypeScript code into `dist/bundle.js` for browser usage.

---

## Notes

* Ensure `node_modules` is ignored in Git using `.gitignore`.
* Compatible with Node 18+ for the latest TypeScript and Webpack versions.

---

