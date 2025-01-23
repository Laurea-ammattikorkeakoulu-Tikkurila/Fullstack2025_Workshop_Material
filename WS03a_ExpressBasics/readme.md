
# Exercise 1: Setting Up an Express Project
**Objective:** Learn how to set up a basic Express project.

**Tasks:**
1. Install Node.js and npm if you haven't already.
2. Create a new directory for your project and navigate into it.
3. Initialize a new Node.js project using `npm init`.
4. Install Express using `npm install express`.
5. Create a basic `app.js` file that sets up an Express application and listens on port 3000.
6. Run your application using `node app.js` and verify it's working by navigating to `http://localhost:3000/`.

# Exercise 2: Creating Basic Routes
**Objective:** Understand how to create basic routes in an Express application.

**Tasks:**
1. In your `app.js` file, set up a route that responds with "Hello, World!" when a GET request is made to the root URL (/).
2. Add another route that responds with "About Page" when a GET request is made to `/about`.
3. Test your routes by navigating to `http://localhost:3000/` and `http://localhost:3000/about`.

# Exercise 3: Handling POST Requests
**Objective:** Learn how to handle POST requests in an Express application.

**Tasks:**
1. Install the body-parser middleware using `npm install body-parser`.
2. Set up body-parser in your `app.js` file to parse incoming request bodies.
3. Create a route that handles POST requests to `/submit` and responds with the data sent in the request body.
4. Use a tool like Postman to send a POST request to `http://localhost:3000/submit` and verify the response.

# Exercise 4: Serving Static Files
**Objective:** Understand how to serve static files in an Express application.

**Tasks:**
1. Create a new directory named `public` and add an `index.html` file with some basic HTML content.
2. Set up Express to serve static files from the `public` directory using `express.static`.
3. Verify that you can access the `index.html` file by navigating to `http://localhost:3000/index.html`.

# Exercise 5: Using Middleware
**Objective:** Learn how to use middleware in an Express application.

**Tasks:**
1. Create a middleware function that logs the request method and URL for each incoming request.
2. Use the middleware function in your `app.js` file.
3. Create another middleware function that checks if a custom header (X-Custom-Header) is present in the request and responds with an error if it's missing.
4. Use the second middleware function for a specific route and test it using Postman or a similar tool.

## Copyright

© 2025 JariKovis