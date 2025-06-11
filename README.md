# DSA Problems List React App

## Overview

This React application lets you track a list of Data Structures & Algorithms (DSA) problems, with options to add, delete, and (soon) edit each problem. The UI is responsive and modern, built using **React**, **TypeScript**, and **Tailwind CSS**.

---

## Features

- **Add new problems** with name and difficulty (Easy/Medium/Hard)
- **Delete problems** from the list
- Responsive and clean UI with Tailwind CSS
- Modular React components with TypeScript for type safety
- Tooltips on action buttons for better UX
- Mobile-friendly design with custom input and select behavior

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dsa-problem-list.git
   cd dsa-problem-list
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

---

## Usage

- The app shows a list of problems with their current status and difficulty.
- Click the **Add** button at the bottom to add a new problem.
- On desktop, enter a name and select a difficulty to add a problem.
- On mobile, enter a name, select a difficulty, then tap **Add**.
- Use the **Delete** button to remove a problem.
- **Edit** functionality is planned for future updates.

---

## Folder Structure

```
src/components/ProblemList.tsx   # Main component listing problems
src/components/AddProblem.tsx    # Component for adding new problems
src/components/Problem.tsx       # Component for displaying a single problem
src/App.tsx                     # App entry point rendering the ProblemList component
tailwind.config.js              # Tailwind CSS configuration
```

---

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Material Symbols (for icons)

---

## Changelog

- **June 2025:**  
  - Add and delete problem functionality is working.
  - Responsive mobile/desktop add form.
  - UI improvements and bug fixes.

_This README will be updated as the project evolves._