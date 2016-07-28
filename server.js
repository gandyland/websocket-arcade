var express = require('express');
var async = require('async');
var app = express()
var io = require('socket.io').listen(app.listen(3000));

app.use('/static', express.static(__dirname + '/static'));


app.get('/', function(req, res) {
    share = generateRoom(6);
    res.render('index.hbs', {shareURL: req.protocol + '://' + req.get('host') + req.path + share, share: share});
});

app.get('/landingPage', function(req, res) {
    res.render('layout.hbs');
});

app.get('/:room([A-Za-z0-9]{6})', function(req, res) {
    share = req.params.room;
    res.render('index.hbs', {shareURL: req.protocol + '://' + req.get('host') + '/' + share, share: share});
});


function generateRoom(length) {
    var room = '';

    for(var i = 0; i < length; i++) {
        room += haystack.charAt(Math.floor(Math.random() * 62));
    }
    return room;
};

function getPair(row, column, step) {
    l = [];
    for(var i = 0; i < 4; i++) {
        l.push([row, column]);
        row += step[0];
        column += step[1];
    }
    return l;
}

var check = [];

check.push(function check_horizontal(room, row, startColumn, callback) {
    for(var i = 1; i < 5; i++) {
        var count = 0;
        var column = startColumn + 1 - i;
        var columnEnd = startColumn + 4 - i;
        if(columnEnd > 6 || column < 0) {
            continue;
        }
        var pairs = getPair(row, column, [0,1]);
        for(var j = column; j < columnEnd + 1; j++) {
            count += games[room]['board'][row][j];
        }
        if(count == 4)
            callback(1, pairs);
        else if(count == -4)
            callback(2, pairs);
    }
});

console.log('Listening on port 3000');
