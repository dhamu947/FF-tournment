const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3008;

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

