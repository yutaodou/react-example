var React = require('react');

var HelloWorld = React.createClass({
    render: function(){
        return (
            <p>
                Hello, My Lord !
                Current time is {this.props.date.toTimeString()}
            </p>
        );
    }
});

module.exports = HelloWorld;
