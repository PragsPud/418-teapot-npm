# 418-teapot 🫖☕

A lightweight, fun Express.js middleware that strictly enforces [RFC 2324](https://datatracker.ietf.org/doc/html/rfc2324) by refusing to brew coffee. 

If a route using this middleware is hit, the server will immediately respond with the classic **HTTP 418 "I'm a teapot"** status code and message.

## Installation

You can install this package using npm:

```bash
npm install 418-teapot
```

*(Note: `express` is required as a peer dependency.)*

## Usage

Simply import the middleware and apply it to any Express route where coffee brewing is strictly prohibited.

```javascript
const express = require('express');
const teapot = require('418-teapot');

const app = express();
const PORT = 3000;

// Apply the teapot middleware to the coffee route
app.get('/coffee', teapot.middleware);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}!`);
});
```

### The Response

When a client makes a `GET` request to `/coffee`, they will receive an HTTP `418` status code along with the following JSON response:

```json
{
  "code": 418,
  "message": "I'm a teapot",
  "description": "The server refuses to brew coffee because it is, permanently, a teapot."
}
```

## API Reference

The module exports the middleware function alongside the raw HTTP 418 data object, giving you flexibility in how you use it.

```javascript
const teapot = require('418-teapot');

console.log(teapot.code); 
// Returns: 418

console.log(teapot.message); 
// Returns: "I'm a teapot"

console.log(teapot.description); 
// Returns: "The server refuses to brew coffee because it is, permanently, a teapot."
```

## License

This project is licensed under the MIT License.
