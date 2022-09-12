// This code will be used to display a website which is already written in html and all that

const express = require('express');
const path = require('path');

const dirPath = path.join(__dirname, 'expressWebsite');

const app = express();


// 1st way this gets only one line and loads whole website
app.use(express.static(dirPath));

// 2nd way 
app.get('/', (req,res) => {
    res.sendFile(`${dirPath}/index.html`)
})

app.get('/achievements', (req,res) => {
    res.sendFile(`${dirPath}/achievements.html`)
})

app.get('/contact', (req,res) => {
    res.sendFile(`${dirPath}/contactUs.html`)
})

app.get('/about', (req,res) => {
    res.sendFile(`${dirPath}/aboutUs.html`)
})


// Creating DYNAMIC WEBSITE USING EJS template

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    let profileInfo = {
        name : 'Ishan Jagani',
        age : '18',
        mail : 'ishan@test.com',
        domain : 'Information Technology',
        skills : ['NodeJS', 'JavaScript', 'ExpressJS', 'HTML', 'CSS', 'Bootstrap']
    }
    res.render('profile', {profileInfo});
})

// * tell that user has entered wrong url will return the default page also know as 404 error page
app.get('*', (req,res) => {
    res.sendFile(`${dirPath}/404.html`)
})


app.listen(4500);
