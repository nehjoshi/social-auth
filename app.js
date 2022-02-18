const dotenv = require('dotenv');
dotenv.config();
const app = require('express')();
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./passport.js');

const authRoute = require('./routes/auth.js');
const port = process.env.PORT || 5000;
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(cookieSession({
    name: 'session',
    keys: ['neh'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoute);

app.listen(port, () => console.log('Listening on port 5000'));