var ReactDOM = require('react-dom');
var React = require('react');

var HelloWorld = require('./helloworld');
var Avartar = require('./avartar');
var router = require('./config/router');

// USER_DATA = {
//     username:"yutaodou",
//     imageUrl: "https://avatars3.githubusercontent.com/u/122233?v=3&s=460"
// }
//
// setInterval(function(){
//     ReactDOM.render( <HelloWorld date= {new Date()}/>, document.getElementById('helloWorld'))
// }, 1000);
//
// ReactDOM.render(
//     <Avartar user = {USER_DATA} />,
//     document.getElementById('avartar')
// );

ReactDOM.render(
    router,
    document.getElementById('avartar')
);
