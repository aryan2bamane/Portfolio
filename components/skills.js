$(document).ready(function() {
    $(`.skill-per`).each(function() {
      var $this = $(this);
      var percentage = $this.attr('percentage');
      $this.css("width", percentage + "%");
      $({
        animatedValue: 0
      }).animate({
        animatedValue: percentage
      }, {
        duration: 1300,
        step: function() {
          $this.attr("percentage", Math.floor(this.animatedValue));
        }
      });
    });
  });