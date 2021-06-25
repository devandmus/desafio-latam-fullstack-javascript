const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/app'));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));