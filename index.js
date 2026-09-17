const express = require('express');
const app = express();

app.get('/api/posts', (req, res) => {
    res.json([{ id: 1, title: "Hello" }]);
});

app.listen(3000);