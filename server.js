const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

app.options('*', cors());

const users = [
  { username: 'john', password: 'password1' },
  { username: 'mary', password: 'password2' }
];
app.use(function(req, res, next) 
{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, HEAD, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
  });
app.post('/users', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.status(200).json({ message: 'User created successfully' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const foundUser = users.find(user => user.username === username && user.password === password);
  if (foundUser) {
    const token = jwt.sign({ username }, 'secretKey'); 
    res.status(200).json({ token });
  } else { console.error('Invalid username or password:', { username, password });
  res.status(401).json({ error: 'Invalid username or password' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
