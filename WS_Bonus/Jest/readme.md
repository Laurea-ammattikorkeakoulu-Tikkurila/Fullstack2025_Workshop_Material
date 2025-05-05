# Getting Started with JavaScript Testing Using Jest

## Introduction
Jest is a delightful JavaScript testing framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js, and more.

This guide will walk you through the steps to set up and start testing your JavaScript code using Jest.

---

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v12 or higher)
- **npm** (Node Package Manager)

---

## Step-by-Step Instructions

### Step 1: Initialize Your Project
1. Open a terminal and navigate to your project directory.
2. Run the following command to initialize a new Node.js project:
    ```bash
    npm init -y
    ```
    This will create a `package.json` file in your project.

---

### Step 2: Install Jest
1. Install Jest as a development dependency:
    ```bash
    npm install --save-dev jest
    ```
2. Verify the installation by checking the version:
    ```bash
    npx jest --version
    ```

---

### Step 3: Configure Jest
1. Add a test script to your `package.json` file:
    ```json
    "scripts": {
      "test": "jest"
    }
    ```
2. Optionally, create a Jest configuration file for advanced settings:
    ```bash
    npx jest --init
    ```
    Follow the prompts to customize your configuration.

---

### Step 4: Write Your First Test
1. Create a new directory for your tests (e.g., `__tests__`).
2. Inside the directory, create a test file, e.g., `sum.test.js`:
    ```javascript
    const sum = (a, b) => a + b;

    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
    ```

---

### Step 5: Run Your Tests
1. Run the tests using the following command:
    ```bash
    npm test
    ```
2. Jest will automatically find and execute all test files.

---

### Step 6: Explore Advanced Features
- **Mocking**: Simulate external dependencies.
- **Snapshots**: Test UI components.
- **Code Coverage**: Generate reports to identify untested code.

---

## Additional Resources
- [Jest Official Documentation](https://jestjs.io/docs/getting-started)
- [Jest GitHub Repository](https://github.com/facebook/jest)

---

Happy Testing! 🎉  