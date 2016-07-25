var ReactDOM = require('react-dom');
var React = require('react');

var HelloWorld = require('./helloworld');
var Avartar = require('./avartar');

USER_DATA = {
    username:"yutaodou",
    image: "https://avatars3.githubusercontent.com/u/122233?v=3&s=460",
    link:"https://github.com/yutaodou"
}

setInterval(function(){
    ReactDOM.render( <HelloWorld date= {new Date()}/>, document.getElementById('helloWorld'))
}, 1000);

ReactDOM.render(
    <Avartar user = {USER_DATA} />,
    document.getElementById('avartar')
);
