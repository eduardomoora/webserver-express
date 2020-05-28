//Helpers
var hbs = require('hbs');
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('capitalizar', (word) => {
    let palabras = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return palabras
});