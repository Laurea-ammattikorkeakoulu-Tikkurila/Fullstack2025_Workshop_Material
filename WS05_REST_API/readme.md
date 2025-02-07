# REST API Workshop

**Objective:** Learn how to build and work with RESTful APIs using Node.js and Express.

## Tasks

1. **Set up a basic Express server**
   - Initialize a new Node.js project.
   - Install Express using `npm install express`.
   - Create a basic Express server that listens on port 3000 and responds with "Hello, World!" when accessed at the root URL (`/`).

2. **Create CRUD endpoints for a resource**
   - Define a resource, such as `users` or `tasks`.
   - Create the following endpoints:
     - `GET /<resource>`: Retrieve a list of all resources.
     - `GET /<resource>/:id`: Retrieve a single resource by ID.
     - `POST /<resource>`: Create a new resource.
     - `PUT /<resource>/:id`: Update an existing resource by ID.
     - `DELETE /<resource>/:id`: Delete a resource by ID.

3. **Implement data validation and error handling**
   - Use a library like `express-validator` to validate incoming request data.
   - Implement error handling middleware to handle validation errors and other types of errors.

4. **Connect to a database**
   - Set up a MongoDB database using MongoDB Atlas or a local MongoDB instance.
   - Use Mongoose to define a schema and model for your resource.
   - Update your CRUD endpoints to interact with the MongoDB database.

5. **Add authentication and authorization**
   - Implement user authentication using JWT (JSON Web Tokens).
   - Protect certain endpoints so that only authenticated users can access them.
   - Implement role-based authorization to restrict access to certain endpoints based on user roles.

## Getting Started

To get started with the workshop tasks, follow these steps:

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the `WS05_REST API` directory:
    ```sh
    cd WS05_REST API
    ```
3. Follow the instructions for each task provided above.

## Contributing

If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Copyright

© 2025 JariKovis