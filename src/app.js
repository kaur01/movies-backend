const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.get('/', (request, response) => {console.log('HERE');response.send('Hello world')});


app.listen(port, () => console.log(`Listening on port ${port}!`));
