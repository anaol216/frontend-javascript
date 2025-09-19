# 📘 Student Interface Project

## 📂 Project Overview

This project is part of the **0x04-TypeScript** tasks. It focuses on creating a **TypeScript interface** for a `Student` object and dynamically rendering student data into an HTML table using **Vanilla JavaScript**.

The project also ensures proper **TypeScript configuration** with Webpack, ESLint, and strict typing rules.

---

## ✅ Requirements

* Define an interface named **Student** with the following properties:

  * `firstName` (string)
  * `lastName` (string)
  * `age` (number)
  * `location` (string)

* Create **two student objects** and store them in an array called `studentsList`.

* Using **Vanilla JavaScript**, render a table where:

  * Each row contains the **firstName** and **location** of a student.

* Webpack must compile the project with:

  * **No type errors found**
  * All variables and types written in **TypeScript**

---

## 📁 Project Structure

```
frontend-javascript/
└── 0x04-TypeScript/
    ├── task_0/
    │   ├── js/
    │   │   └── main.ts
    │   ├── package.json
    │   ├── .eslintrc.js
    │   ├── tsconfig.json
    │   └── webpack.config.js
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/frontend-javascript.git
cd frontend-javascript/0x04-TypeScript/task_0
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Webpack Build

```bash
npm run build
```

You should see:

```
No type errors found.
```

### 4️⃣ Open in Browser

Open the generated **index.html** (after Webpack build) and you will see a **student table** rendered with their first names and locations.

---

## 📝 Example Output

| First Name | Location    |
| ---------- | ----------- |
| John       | New York    |
| Jane       | Los Angeles |

---

## ⚙️ Technologies Used

* **TypeScript**
* **Webpack**
* **ESLint**
* **Vanilla JavaScript (DOM Manipulation)**

---

## 📌 Author

👤 Anaol A.
---
