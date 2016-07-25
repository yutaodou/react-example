var React = require('react');

var ProfilePhoto = React.createClass({
    render: function(){
        return <img src={this.props.image} style= {{height:100, width:100}}/>;
    }
});

var ProfileLink = React.createClass({
    render: function(){
        return (
            <div><a href="{this.props.link}">{this.props.link}</a></div>
        );
    }
});

var ProfileName = React.createClass({
    render: function() {
        return (
            <div>{this.props.username}</div>
        );
    }
});

var Avartar = React.createClass({
    render: function(){
        return (
            <div>
                <ProfilePhoto image = {this.props.user.image} />
                <ProfileLink link = {this.props.user.link} />
                <ProfileName username = {this.props.user.username} />
            </div>
        );
    }
});

module.exports = Avartar;
