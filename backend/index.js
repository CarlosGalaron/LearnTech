const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde el backend!' });
});

app.listen(3000, () => console.log('Backend en http://localhost:3000'));
