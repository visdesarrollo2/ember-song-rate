/*jslint node: true */
/*jslint nomen: true */
/*global Ember, _ */
"use strict";

Ember.Handlebars.helper('titleize', function(title) {
  return _.titleize(title);
});