require('dotenv').config();
require('./database/connection');

const app = require('./app');

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
