// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/NumberView'
], function($, _, Backbone, NumberView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page hey
        var numberView = new NumberView();
        numberView.render();
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
