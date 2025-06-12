const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());

app.get('/get-token', (req, res) => {
  res.json({ token: process.env.API_TOKEN });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Token server running at http://localhost:${PORT}`);
});
