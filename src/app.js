var ReactDOM = require('react-dom');
var React = require('react');

var HelloWorld = require('./helloworld');

ReactDOM.render(
    <HelloWorld date= {new Date()}/>,
    document.getElementById('helloWorld')
)
