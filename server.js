import express from 'express';

const app = express();
const serverPort = 3000; 
app.use(express.json()); 

const users = [
    { id: 1, name: 'John Doe'},
    { id: 2, name: 'Jane Smith'},
    { id: 3, name: 'Michael Doe'}
  ]; 


// GET route
app.get('/users', (req, res) => {
  res.json(users);
});


app.get('/greet', (req, res) => {
    res.json('Hello, developer!');
});

// POST route

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json ({message: 'User added successfully', users: newUser});
});

app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});

app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
});

