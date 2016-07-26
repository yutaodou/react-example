var ReactDOM = require('react-dom');
var React = require('react');

var HelloWorld = require('./helloworld');
var Avartar = require('./avartar');
var router = require('./config/router');

ReactDOM.render(
    router,
    document.getElementById('avartar')
);
