const app = require('./app');
require('dotenv').config();
const port = 3000;

// Root API endpoint
app.get('/', (req, res) => {
    res.send('Welcome to our API!');
})

// Listen to port
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});
