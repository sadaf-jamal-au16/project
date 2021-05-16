const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('/hoverboard', (req, res) => {
    res.render('index', {
        page_header_title: 'Hoverboard',
        header_title: 'Hoverboard',
        footer_name: 'Umar Khan'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        header_title: '404',
        footer_name: 'Umar Khan',
        header_message: ' : Page not found!'
    });
});

app.listen(port, () => console.log('Server is up on port ' + port));