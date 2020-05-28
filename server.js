const express = require('express')
const app = express()
const  hbs = require('hbs');
require('./hbs/helpers')
const port =process.env.PORT || 3000
//__dirname get all path no matter where our app is will wrap and concat 
app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parcials', function (err) {});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'fernando',
    });

})

app.get('/about', (req, res) => {



    res.render('about', {
        nombre: 'fernando',

    });

})


app.listen(port, () => {
    console.log(`listening at ${port}`);
})