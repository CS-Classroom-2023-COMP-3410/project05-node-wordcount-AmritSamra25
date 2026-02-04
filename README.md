[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/V8Vai9pX)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=22526339&assignment_repo_type=AssignmentRepo)
Node.js Wordcount Exercise
---

**Objective**:

In this exercise, you'll be constructing a Node.js application that reads in a provided file named 'declaration.txt'. The application should calculate the frequency of each word in the text, and print out the first 15 lines of the text with each word colored according to its frequency. You'll be provided with a test suite written in Jest, which your code must pass to demonstrate its correctness.

---

**Setup Instructions**

1. First, clone the repository provided to you by GitHub Classroom.

2. Navigate to the root directory of the repo.

3. Initialize a new Node.js project by running the following command:
   ```
   npm init
   ```

   When asked for the default testing command input `jest`.

4. Next, you'll need to install the required packages. Run the following commands:
   ```
   npm install jest
   npm install chalk@4
   ```

5. In the repository, you'll find an `app.js` file with several `TODO` comments. Your task is to complete this file based on the instructions given in those comments.

6. You're also provided with a test suite inside the `__tests__` directory in a file named `test-app.js`. These tests are designed to check the correctness of your implementation.

---

**Requirements**:

1. Complete all the functions and areas marked with `TODO` comments in the `app.js` file. Make sure you read and understand what's being asked in each section.

2. The application should read the content of the 'declaration.txt' file synchronously.

3. Your code should correctly calculate the word frequency and color words in the first 15 lines based on that frequency when printing to the console.

4. Ensure no extra output is printed when your `app.js` is imported elsewhere, such as by the test suite. 

---

**Submission Instructions**:

1. Before submitting, make sure all tests pass by running:
   ```
   npm test
   ```

   If there are any failing tests, review the error messages and revisit your code to fix any issues.

2. Once all tests are passing, commit your changes and push your code to your GitHub Classroom repository.

3. Submit your assignment as instructed for GitHub classroom. 

---

**Assessment**:

1. Your submitted code will be reviewed for clarity, correctness, and completeness. All Jest tests should pass, and the code should be free of any errors or extraneous console logs.

2. You may be called upon to explain your code and the decisions you made during the development process. Understanding the logic and reasoning behind your code is crucial.
