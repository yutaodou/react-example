var React = require('react');
var background = require('../styles/index');

var Prompt = React.createClass({
    propTypes: {
        header: React.PropTypes.string.isRequired,
        onSubmitUser: React.PropTypes.func.isRequired,
        onUpdateUser: React.PropTypes.func.isRequired,
        username: React.PropTypes.string.isRequired
    },

    render: function(){
        return (
            <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center" style={background}>
                <h1>{this.props.header}</h1>
                <div className = "col-sm-12">
                    <form onSubmit = {this.props.onSubmitUser}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Github username"
                                onChange = {this.props.onUpdateUser}
                                value = {this.props.username}
                                type="text"/>
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-3">
                            <button className="btn btn-block btn-success" type="submit">Continue</button>
                        </div>
                    </form>
                </div>
            </div>        );
    }
});

module.exports = Prompt;
