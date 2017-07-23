var React = require('react');


module.exports = React.createClass({
    render: function() {
        var cName = 'sample';
        if (this.props.className) {
            cName += ' ' + this.props.className;
        }
        return (
            <input type={this.props.type} name={this.props.name} value={this.props.value} className={cName} placeholder={this.props.placeholder} id={this.props.id} />
        );
    }
});