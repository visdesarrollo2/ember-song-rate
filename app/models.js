/*jslint node: true */
/*global DS, App */
"use strict";

App.Song = DS.Model.extend({
  title: DS.attr('string'),
  artist: DS.attr('string'),
  score: DS.attr('number')
});