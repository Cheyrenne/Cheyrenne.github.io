var toggle = false;
var prev = undefined;
var prevdata = undefined;
/* Initialize listener objects */
var navHandlers = {
  init: function() {
    this.listener();
  },
  listener: function() {
    $('nav li').on('click',function(e) {
      e.preventDefault();
      var element = $(this).data('el'); 
      
      if(toggle === false) {
        $(element).slideToggle(800);
        toggle = true;
        prev = $(this);
        prevdata = prev.data('el');
      }
      else if(prevdata != element) {
        prev = $(this);
        $(prevdata).slideToggle(400,function() {
          $(element).slideToggle(400);
          prevdata = prev.data('el'); 
        });
      }
    });
  }
};

$(document).ready(function() {
  navHandlers.init();
  
});