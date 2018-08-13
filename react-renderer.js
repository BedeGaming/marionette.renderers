var ReactDOM = require('react-dom')
var React = require('react');

function unmountReact() {
  ReactDOM.unmountComponentAtNode(this.el)
}

module.exports = function (Component, data) {
  if (!this._reactMounted) {
    this.on('destroy', unmountReact, this)
    this._reactMounted = true
  }
  var state = this.thisAsState ? this : data;
  ReactDOM.render(<Component {...state}/>, this.el);
}
