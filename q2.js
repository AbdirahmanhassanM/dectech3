const express = require('express');
const app = express();

app.get('/getServer', (req, res) => {
  res.json({ code: 200, server: 'localhost:3001' });
});

app.listen(3001, () => console.log('Server running on port 3001'));
