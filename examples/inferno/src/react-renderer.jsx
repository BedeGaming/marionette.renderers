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
  // const temp = template.call(this, state);
  // console.log(temp);
  // const comp = Component;
  // const hello = (<h1>Hello</h1>);
  // console.log(hello);
  // console.log(Component);
  const hello = (<Component {...state}/>);
  ReactDOM.render(hello, this.el)
}
