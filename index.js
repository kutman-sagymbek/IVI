const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors')
const jsonServerAuth = require('json-server-auth');

const app = express();
const router = jsonServer.router('db.json'); // Replace 'db.json' with your JSON data file.

// Enable JSON Server Auth Middleware
app.db = router.db;
app.use(express.json());
app.use(jsonServerAuth);

// Define your routes and other middleware as needed.
// For example:
app.use(cors({
    origin: '*'
}));
app.use('/api', router);

// Start your Express server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
