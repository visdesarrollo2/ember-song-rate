/*jslint node: true */
/*global Ember, App */
"use strict";

App.StarView = Ember.View.extend({
  star: null,
  
  tagName: "a",
    
  mouseLeave: function(evt) {
    this.get('controller').send('mouseLeave', this.get('star'));
  },
  
  mouseEnter: function(evt) {
    this.get('controller').send('mouseEnter', this.get('star'));
  },
  
  click: function(evt) {
    this.get('controller').send('click', this.get('star'));
  }
});