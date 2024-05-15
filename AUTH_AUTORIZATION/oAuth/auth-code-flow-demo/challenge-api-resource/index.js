const express = require('express')
const { auth } = require('express-oauth2-jwt-bearer');
var guard = require('express-jwt-permissions')()
const cors = require('cors');



const app = express()
const PORT = process.env.PORT || 3001;

const jwtCheck = auth({
    //audience is the important property, Auth-Server identifies the client uniquely with aud prop
    audience: 'http://localhost:3001',
    //Which provider is giving the token
    issuerBaseURL: 'https://dev-8mv48kq1hew3c1ei.us.auth0.com/',
    //Algo used to encrypt
    tokenSigningAlg: 'RS256',
    //secret: 'NKRJ9-8z8G_zIECB7TWaIsWofG1Fe1h0O0dsXiNwhPqJp-PYaz2emL5wK6hsHFny',
});

// enforce on all endpoints
//app.use(jwtCheck);

app.use(cors({ origin: '*' }))

//Unsigned Flow 
app.get('/', (req, res, err) => {
    res.json({ message: " This is get Request for Home Page from resource-api" })
})

//Signed Flow 
app.get('/challenges', jwtCheck, function (req, res) {
    res.json({
        challenge1: "This is Challenge 1",
        challenge2: "This is Challenge 2",
    });
});


app.listen(PORT, () =>
    console.log(`resource-api server started on port:${PORT},
 url:http://localhost:${PORT}`)
)