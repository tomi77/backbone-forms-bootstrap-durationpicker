###
  Backbone-Forms Bootstrap-durationpicker editor 1.0.0

  Copyright (c) 2016 Tomasz Jakub Rup

  https://github.com/tomi77/backbone-forms-bootstrap-durationpicker

  Released under the MIT license
###

((root, factory) ->
  switch
    when typeof define is 'function' and define.amd
      define ['backbone-forms', 'bootstrap-durationpicker'], factory
    when typeof exports is 'object'
      require('bootstrap-durationpicker')
      factory require('backbone-forms')
    else
      factory root.Backbone.Form
  return
) @, (Form) ->
  Text = Form.editors.Text

  Form.editors['bootstrap.DurationPicker'] = Text.extend
    initialize: (options) ->
      Text::initialize.call @, options

      @editorOptions = options.editorOptions or {}
      return

    render: () ->
      Text::render.call @

      @$el.durationpicker @editorOptions
      @

  return
