var React = require('react');

var ProfilePhoto = React.createClass({
    render: function(){
        return <img src={this.props.imageUrl} style= {{height:100, width:100}}/>;
    }
});

var Link = React.createClass({
    changeUrl: function(){
        window.location.replace(this.props.href);
    },

    render: function(){
        return (
            <span style={{color:'blue', cursor:'pointer'}} onClick={this.changeUrl}>
                {this.props.children}
            </span>
        );
    }
});

var ProfileLink = React.createClass({
    render: function(){
        return (
            <Link href={"http://www.github.com/"+this.props.username}>
                {this.props.username}
            </Link>
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
                <ProfilePhoto imageUrl = {this.props.user.imageUrl} />
                <ProfileName username = {this.props.user.username} />
                <ProfileLink username= {this.props.user.username} />
            </div>
        );
    }
});

module.exports = Avartar;
