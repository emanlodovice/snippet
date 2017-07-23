import React from 'react';
// var React = require('react');


module.exports = React.createClass({
    render: function() {
        var cName = 'button';
        if (this.props.className) {
            cName += ' ' + this.props.className;
        }
        return (
            <button className={cName} id={this.props.id} onClick={this.props.onClick}>{this.props.children}</button>
        );

    }
});