const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const db = require('./models');
const wordRoutes = require('./routes/wordRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

db.sequelize.sync()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error: ' + err));

// Routes
app.use('/words', wordRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
