/*jslint node: true */
/*global Ember, App */
"use strict";

App.RatingStarsComponent = Ember.Component.extend({
  max: 0,
  score: 0,
  hoverIdx: -1,
  stars: [],
  
  actions: {
    mouseEnter: function(star) {
      this.set('hoverIdx', star.index);
    },
    
    mouseLeave: function(star) {
      this.set('hoverIdx', -1);
    },
    
    click: function(star) {
      var score = star.index + 1;
      this.set('score', score);
      this.sendAction('action', this.get('param'), score);
    }
  },
  
  setStars: function() {
    var idx = 0, stars = [];
    for (idx = 0; idx < this.get("max"); idx += 1) {
      stars.push({
        index: idx,
        highlight: idx <= this.get("hoverIdx"),
        full: this.get("score") > idx || idx <= this.get("hoverIdx")
      });
    }
    this.set('stars', stars);
  }.observes("score", "max", "hoverIdx").on("didInsertElement")
});