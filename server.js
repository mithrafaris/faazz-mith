const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config({ path: 'config.env' });

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// Serve static files
// app.use('/admin/css', express.static(path.resolve(__dirname, 'public/admin/css')));
// app.use('/admin/img', express.static(path.resolve(__dirname, 'public/admin/img')));
// app.use('/admin/js', express.static(path.resolve(__dirname, 'public/admin/js')));

app.use(express.static(path.resolve(__dirname, 'public/user')));



// Set views directories for admin and user
app.set('views', [
  path.resolve(__dirname, 'views/admin'),
  path.resolve(__dirname, 'views/user'),
]);

app.use('/', require('./server/routes/user/userRoute'));
// app.use('/', require('./server/routes/admin/adminRoute'));





// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
