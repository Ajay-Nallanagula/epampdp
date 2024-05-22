const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const PORT = process.env.PORT || 3001
const secret = crypto.randomUUID()

//The endpoint can read payload from body , hence urlencoded

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/guest', (_req, res) => {
    res.json({
        message: "You can see the menu!",
        item1: "Pizza",
        item2: "Burger",
    })
})

app.post('/login', async (req, res) => {
    //Erroring here body is undefined
    const email = req.body["email"]
    const password = req.body["password"]

    
    console.log({ email }, { password })


    // jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function (err, token) {
    //     console.log(token);
    // });

    const token = await jwt.sign({ email, password }, secret, { algorithm: 'HS256' })


    res.send({ token })
})

app.get('/protected', verifyToken, async (req, res) => {
    res.send('success')
})


function verifyToken(req, res, next) {

    const [p1, p2] = req.headers["authorization"].split(' ')
    console.log(p1, p2)

    const decoded = jwt.verify(p2,secret, { algorithm: 'HS256' })
    console.log(decoded)
    next()
}


/* 
Refresh Token Implementation
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const SECRET_KEY = 'your-secret-key';
const REFRESH_SECRET_KEY = 'your-refresh-secret-key';

app.use(express.json());

let refreshTokens = [];

app.post('/token', (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken && refreshTokens.includes(refreshToken)) {
    jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, user) => {
      if(err) return res.status(403).json('Invalid refresh token');
      const accessToken = jwt.sign({ user: user.user }, SECRET_KEY, { expiresIn: '20s' });
      return res.json({ accessToken });
    });
  } else {
    return res.status(403).json('User not authenticated');
  }
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // Usually, you would compare these with values from a database.
  if (username && password) {
    const user = { username, password };
    const accessToken = jwt.sign({ user }, SECRET_KEY, { expiresIn: '20s' });
    const refreshToken = jwt.sign({ user }, REFRESH_SECRET_KEY);
    refreshTokens.push(refreshToken);
    return res.json({ accessToken, refreshToken });
  } else {
    return res.status(403).json('Missing credentials');
  }
});

app.delete('/logout', (req, res) => {
  const refreshToken = req.body.refreshToken;
  refreshTokens = refreshTokens.filter(token => token !== refreshToken);
  return res.sendStatus(204);
});

app.listen(3000);
*/

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})