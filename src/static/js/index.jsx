var ReactDom = require('react-dom');
var React = require('react');
var Styles = require('../styles/index.less');
var LoginPage = require('./components/login_page.jsx');
var Editor = require('./components/editor.jsx');

ReactDom.render(<Editor />, document.getElementById('react-app'));
