var React = require('react');
var Input = require('./form/input.jsx');
var Button = require('./form/button.jsx');

module.exports = React.createClass({

    render: function() {
        return (
            <form className="center-form">
                <label htmlFor="username">Username: </label> 
                <Input type="text" name="username" className="shit" placeholder="Username" id="username" />
                <br/>
                <label htmlFor="password">Password: </label>
                <Input type="password" name="password" className="password" id="password" />
                <br/>
                <Button>Login</Button>
            </form>
        );
    }
});