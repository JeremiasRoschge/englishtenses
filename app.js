//Vars
const express = require('express');
const PORT = process.env.PORT || 3000

const app = express();

//Plantillas
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/views'))

//Router
app.use('/', require('./router/index.js'))//Index page
app.use('/past', require('./router/past.js'))
app.use('/sp', require('./router/simplepast.js'))
app.use('/present', require('./router/present.js'))
app.use('/spr', require('./router/simplepresent.js'))
app.use('/spr', require('./router/presentcontinuous.js'))

//Listener
app.listen(PORT, () => {
    console.log(`app listenig on port ${PORT}`)
});
