define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/numbers/number_program.html',
  'text!templates/numbers/pi.html'
], function($, _, Backbone, NumberTemplate, PITemplate){

  var NumbersView = Backbone.View.extend({
    el: $(".main-view"),
    events:{
      'click .numprogram li':'numprogram',
      'submit .numberForm':'submitForm'
    },
    render: function(){
      this.$el.html(NumberTemplate);
      this.delegateEvents();
    },
    numprogram:function(ev){
      if($(ev.target).data('program') == 'pi'){
        this.$el.html(PITemplate);
      }
      this.delegateEvents();
    },
    submitForm: function(ev){
      var numberDetails = $(ev.currentTarget).serializeObject();
      if($(ev.target).data('type') == 'pi'){
        numberDetails.nthdigit
        //console.log(numberDetails);
       }
       console.log(numberDetails);
       return false;
    }
  });

  return NumbersView;
});
