const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const db = require('./config/db');

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde el backend!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor backend en http://localhost:${PORT}`));
