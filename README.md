# Cypress TypeScript Project

Welcome to the Cypress TypeScript Project repository! This repository serves as a learning resource for working with Cypress using TypeScript on a Linux environment.

[Link to Cypress Test Video](https://github.com/nafiz-hossain/cypressfolio/assets/33452602/5909bd80-1e06-4bea-ba18-a02a411a22e3)

## Installation

Before getting started, ensure you have the following prerequisites installed on your system:

- Node.js and npm: You can download and install Node.js from [here](https://nodejs.org/).
- Git: If not already installed, you can install Git by following the instructions [here](https://git-scm.com/).

Once you have Node.js and npm installed, clone this repository to your local machine using Git:

```bash
git clone https://github.com/your-username/cypress-typescript-project.git
```

Navigate to the project directory:

```bash
cd cypress-typescript-project
```

Install project dependencies:

```bash
npm install
```

## Usage
To run the Cypress tests, follow these steps:

Build the TypeScript project:
```bash
npm run build
```

Open Cypress:
```bash
npx cypress open
```
This will open the Cypress Test Runner. You can then select the spec files you want to run or click on a spec file to run the tests in the browser.

## Folder Structure
```bash
cypress/: Contains Cypress test files and configurations.
cypress/integration/: Directory for Cypress test files.
cypress/support/: Directory for custom commands and global configuration.
src/: Contains TypeScript source files.
tsconfig.json: TypeScript configuration file.
```

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License
This project is licensed under the MIT License.
