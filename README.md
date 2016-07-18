# Backbone-Forms Bootstrap-durationpicker editor

[![Code Climate](https://codeclimate.com/github/tomi77/backbone-forms-bootstrap-durationpicker/badges/gpa.svg)](https://codeclimate.com/github/tomi77/backbone-forms-bootstrap-durationpicker)

A [Backbone-Forms](https://github.com/powmedia/backbone-forms) editor that covers [Bootstrap-durationpicker](http://bilbous.github.io/bootstrap-durationpicker) functionality.

## Installation

    bower install backbone-forms-bootstrap-durationpicker

## Usage

    Model = Backbone.Model.extend
      schema:
        duration:
          type: 'bootstrap.DurationPicker'
          label: 'Duration'
          editorOptions:
            showSeconds: true

    model = new Model()

    form = new Backbone.Form
      model: model

    @$el.html form.render().$el

## Demo

https://tomi77.github.io/backbone-forms-bootstrap-durationpicker/