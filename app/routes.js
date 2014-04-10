/*jslint node: true */
/*global Ember, App */
"use strict";

App.SongsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('song');
  }
});