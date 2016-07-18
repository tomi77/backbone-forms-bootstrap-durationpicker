
/*
  Backbone-Forms Bootstrap-durationpicker editor 1.0.0

  Copyright (c) 2016 Tomasz Jakub Rup

  https://github.com/tomi77/backbone-forms-bootstrap-durationpicker

  Released under the MIT license
 */
(function(root, factory) {
  switch (false) {
    case !(typeof define === 'function' && define.amd):
      define(['backbone-forms', 'bootstrap-durationpicker'], factory);
      break;
    case typeof exports !== 'object':
      require('bootstrap-durationpicker');
      factory(require('backbone-forms'));
      break;
    default:
      factory(root.Backbone.Form);
  }
})(this, function(Form) {
  var Text;
  Text = Form.editors.Text;
  Form.editors['bootstrap.DurationPicker'] = Text.extend({
    initialize: function(options) {
      Text.prototype.initialize.call(this, options);
      this.editorOptions = options.schema.editorOptions || {};
    },
    render: function() {
      Text.prototype.render.call(this);
      this.$el.durationpicker(this.editorOptions);
      return this;
    }
  });
});
