# middlewares

This folder contains custom Express middleware functions.

- `authMiddleware.js` – Verifies JWT token and protects private routes
- `errorMiddleware.js` – Central error handling function
- `validateRequest.js` – Validates request payloads (optional)

Use middleware in your route files to cleanly separate concerns.
