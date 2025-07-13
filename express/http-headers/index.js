const express = require('express');
const app = express();
const port = 8000;

app.use(express.json()); 

// get route
app.get('/hello', (req, res) => {
  res.set('X-My-Header', 'ExpressLearning');
  res.send('Hello World!');
});

// post route
app.post('/data', (req, res) => {
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  res.send({ message: 'Data received', data: req.body });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
