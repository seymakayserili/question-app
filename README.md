# 🧠 React Quiz App

A dynamic **Quiz (Question–Answer) application** built using **React** and **Vite**.

The app presents users with a set of rules-based questions and displays detailed results at the end of the quiz, including correct, incorrect, and unanswered questions.

🔗 **Live Demo:**  
https://vermillion-elf-94ddfa.netlify.app/

---

## 🚀 Tech Stack

- ⚛️ **React**
- ⚡ **Vite**
- 🎨 **CSS**
- 🧩 **JavaScript (ES6)**

---

## 📋 Features

The application is developed to meet the following requirements:

- ✅ The quiz consists of **10 questions**
- ⏱️ Each question is displayed for **30 seconds**
- 👀 Answer options are hidden for the first **4 seconds**
- 👉 When an option is selected **or time runs out**, the app automatically moves to the next question
- 🔙 **Users cannot return to previous questions**
- 📊 At the end of the quiz, the user sees:
  - Number of correct answers  
  - Number of incorrect answers  
  - Number of unanswered questions  
  - A detailed list of given answers with question numbers  

---

## 🧠 Application Logic

- Questions are loaded from the `questions.js` file  
- A countdown timer starts for each question  
- Once an answer is selected, it is locked and saved  
- Quiz results are displayed on the same page after completion

## ✨ Developer

Şeyma Kayserili
Developed as part of the Patika.dev Front-End Bootcamp.

---

## 📂 Project Structure

```text
src/
├── assets/
│   ├── pictures/        # Question images
│   └── questions.js    # Quiz data
├── components/
│   ├── Info/
│   └── Questions/
├── App.jsx
└── main.jsx

```

## 🖥️ Installation & Running the Project

To run this project locally:

```bash
git clone <repo-link>
cd question-app
npm install
npm run dev
