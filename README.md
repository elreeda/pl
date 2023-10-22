# Project Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Running the Project](#running-the-project)
   - [Running Tests (Cypress)](#running-tests-cypress)
3. [Tech stack](#tech-stack)

## 1. Introduction<a name="introduction"></a>

A robust and beautiful order tracker app.

## 2. Getting Started<a name="getting-started"></a>

### Running the Project<a name="running-the-project"></a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To get started clone the project

```bash
# Step 1: Clone the repository
git clone git@github.com:elreeda/pl.git

# Step 2: Navigate to the project directory
cd pl

# Step 3: Install dependencies
npm install

# Step 4: Env variables
echo 'REACT_APP_API_HOST=https://pl-ef.vercel.app/api' > .env.local

# Step 5: Start the development server
npm start
```

### Running Tests (Cypress)<a name="running-tests-cypress"></a>

We have e2e written with Cypress to get started with just follow these steps

```bash
# Step 1: Ensure the project is running (if not already)
npm start

# Step 2: Open a new terminal window and run Cypress tests
npm run e2e

# For headless tests
npm run e2e:headless

# For components testing
npm run e2e:components
```

## 3. Tech Stack<a name="tech-stack"></a>

In addition to React, we've incorporated Tailwind CSS for styling, and with React Router version 6, you'll notice some differences compared to the typical usage of React Router versions prior to 5. We are relying on forms, loaders and actions for data retrieval.

I have also create a little edge function that hosted on Vercel to mock our API.
