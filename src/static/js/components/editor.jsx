var React = require('react');
var Button = require('./form/button.jsx');

module.exports = React.createClass({
    save: function(e) {
        var input = this.refs.input;
        var csrftoken = this.getCookie('csrftoken');
        input.focus();
        fetch('/snippets/', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                code: input.innerText,
            })
        }).then((response) => {
            response.json().then((data) => {
                window.location = data.highlight;
            })
        });
    },
    getCookie: function(name) {
        var value = '; ' + document.cookie;
        var parts = value.split('; ' + name + '=');
        return parts.pop().split(';')[0];
    },
    componentDidMount: function() {
        this.refs.input.focus();
    },
    render: function() {
        return (
            <div>
                <Button id="editor-save" onClick={this.save}>Save</Button>
                <div className="editor" contentEditable={true} autoFocus={true} ref="input"></div>
            </div>
        );
    }
});