/*jslint node: true */
/*jslint nomen: true */
/*global Ember, DS, App, _ */
"use strict";

window.App = Ember.Application.create();

App.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'myApp2.songs'
});

App.Router.map(function() {
  this.resource('songs', {
    path: '/'
  });
});

_.mixin(_.string.exports());