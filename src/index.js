const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const expressSwagger = require('express-swagger-generator')(app);

const options = require('./config/swagger');
const cveRoute = require('./routes/cve-route');

//* Middleware *//
app.use(
  cors({
    origin: ['http://localhost:3000'],
    allowedHeaders: ['Content-Type'],
  }),
);
app.use(express.json());
app.use('/api/cves', cveRoute);
//*

//* connection *//
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
expressSwagger(options);

module.exports = app;
