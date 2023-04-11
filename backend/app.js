const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' })
require('./db/connect');

const PORT = process.env.PORT;
app.use(express.json());
app.use(require('./routes/auth'))

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})