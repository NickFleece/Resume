const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/CSI4900Report', function(req, res) {
    res.render('reports/CSI4900_Report')
})

app.listen(port, () => console.log(`Resume app listening on port ${port}!`));
