const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, () => console.log(`Resume app listening on port ${port}!`));
