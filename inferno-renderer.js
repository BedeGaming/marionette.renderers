var inferno = require('inferno');

var isClass = (obj) => {
  return (obj.prototype instanceof inferno.Component);
};

module.exports = function (template, data) {
  var state = this.thisAsState ? this : data;
  var renderedTemplate = isClass(template) ? new template(state).render() : template(state);

  inferno.render(renderedTemplate, this.el);
}
