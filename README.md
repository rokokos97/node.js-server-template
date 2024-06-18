# Node.js Server Template

Welcome to the Node.js Server Template, a foundational server setup using Node.js and MongoDB. This project is designed to provide a robust starting point for creating a server-side application with essential features like user management, database initialization, and basic security configurations.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Developers](#developers)

## Features

- Database initialization on server start
- Automatic synchronization with a predefined database template
- User management with a GET route for fetching user lists
- Basic security features using Helmet and CORS

## Tech Stack

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: The database for modern applications.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **Helmet**: Secure your Express apps by setting various HTTP headers.
- **Cors**: Node.js package for providing a Connect/Express middleware that can be used to enable CORS.

### Dev Dependencies
- **TypeScript**: JavaScript with syntax for types.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: An opinionated code formatter.
- **Nodemon**: A utility that monitors for changes in your source and automatically restarts your server.
- **@types packages**: Type definitions for Node.js, Express, and other modules.

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/node.js-server-template.git
    cd node.js-server-template
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=8080
    MONGO_DB_CONNECTION_STRING=your_mongo_db_connection_string
    NODE_ENV=development
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:8080`.

## Usage

### User Management

- Fetch user list: Send a GET request to `/api/users`.

### Database Initialization

- On server start, the database is checked against a predefined template. If there are differences, the database is synchronized with the template.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the ISC License - see the [LICENSE](https://github.com/rokokos97/node.js-server-template/blob/master/LICENSE.txt) file for details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Helmet](https://helmetjs.github.io/)
- [Cors](https://expressjs.com/en/resources/middleware/cors.html)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Nodemon](https://nodemon.io/)

## Developers

- [Rostyslav Lisovyi](https://github.com/rokokos97) - Backend Development

Thank you for checking out this Node.js Server Template! If you have any questions or suggestions, feel free to open an issue or contact me.
