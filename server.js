const express = require('express');
const mongoose = require('mongoose');
require('moment');
require('dotenv').config();

// Assign port to server
const PORT = process.env.PORT || 8080;

// Require Models
const db = require('./models')

// Initialize Express
const app = express();

// Configure middleware
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static('public'));

// Define API routes here
app.get('/', (req, res) => {
   res.json({
      msg: 'Hello API Route'
   });
});

// Send every other request to the React app
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Connect to the Mongo DB
const dbName = process.env.DB_NAME;   //? Database Name
const dbUser = process.env.DB_USER;   //? Database Username
const dbPsw = process.env.DB_PSW;     //? Database Password
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://${dbUser}:${dbPsw}@ds113046.mlab.com:13046/${dbName}`;
mongoose
   .connect(MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
   })
   .catch(error => handleError(error));

// Start the server
app.listen(PORT, function() {
   console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
   );
});
