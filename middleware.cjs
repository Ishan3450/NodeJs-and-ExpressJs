// I skipped the middleware part coz it doesn't get into my head though
const express = require('express');
const app = express();


const isAbove18 = (req, res, next) => {
    if (!req.query.age ){
        res.send('Please provide your age');
    } else if(req.query.age <18){
        res.send('You are underaged');
    } else {
        next();
    }
}

const isLoggedIn = (req, res, next) => {
    if (!req.query.pwd){
        res.send('Please enter password to log in the app');
    } else if ( req.query.pwd != 'ishan3450'){
        res.send('Invalid Password');
    } else{
        next();
    }
}

// 1 : Application level middleware which will be applied to whole app
app.use(isAbove18);

// 2 : Specific middleware
app.get('/', isLoggedIn, (req, res) => {
    res.send('Successfulyl Logged in !!');
})

app.get('/home', (req, res) => {
    res.send(`
        <h1>Welcome to my home page</h1>
        <nav>
        <a href='/about'>About</a>
        <a href='/help'>Help</a>
        <a href='/profile'>Profile</a>
        <a href='/json'>Json</a>
        <a href='/jsonArr'>Array of Json</a>
        </nav>

    `);
});

app.get('/about', (req, res) => {
    res.send(`
        <h1>About Us</h1><div>This page is created by Ishan</div>
        <nav>
        <a href='/home'>Home</a>
        <a href='/help'>Help</a>
        <a href='/profile'>Profile</a>
        <a href='/json'>Json</a>
        <a href='/jsonArr'>Array of Json</a>
        </nav>
    `);
});

app.get('/help', (req, res) => {
    res.send(`
    <nav>
        <a href='/home'>Home</a>
        <a href='/about'>About</a>
        <a href='/profile'>Profile</a>
        <a href='/json'>Json</a>
        <a href='/jsonArr'>Array of Json</a>
        </nav>
        <h1>Search Your Queries here</h1>
        <div>
            <input type="text" placeholder="get your problem here"/>
            <button>Search</button>
        </div>
    `);
})


// for now we will pass data in query string format
app.get('/profile', (req, res) => {
    res.send(`
    <nav>
        <a href='/home'>Home</a>
        <a href='/about'>About</a>
        <a href='/help'>Help</a>
        <a href='/json'>Json</a>
        <a href='/jsonArr'>Array of Json</a>
        </nav>
    
        Hello, ${req.query.name}`
    );
})

app.get('/json', (req, res) => {
    res.send({
        name : 'Ishan',
        age : '18',
        field : 'Information Technology'
    })
})

app.get('/jsonArr', (req, res) => {
    res.send(
        [
            {
                name : 'Ishan',
                age : '18',
                field : 'Information Technology'
            },
            {
                name : 'Adarsh',
                age : '18',
                field : 'Information Technology'
            },
            {
                name : 'Harsh',
                age : '20',
                field : 'Information Technology'
            }
        ]
    )
})
app.listen(4500);
