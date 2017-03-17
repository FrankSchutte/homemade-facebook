/**
 * Created by Frank on 17-3-2017.
 */

const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join('./build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, function() {
    console.log('Server started and listening to::' + port);
});
