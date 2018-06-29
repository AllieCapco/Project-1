$(function(){
  $("h2").hide(300).delay(500).show(300).delay(500);

});

$(function(){
  $(".jumbotron p").css({color:"blue"});
});

$(function(){
  $(".jbutton").on("click", function() {
    var cardid = $(this).attr('data-cardid');
    $("#"+cardid).toggle(100);
  });
});

$(function(){
  $("#cardbtn1").on("click", function(){
    $("#card1").fadeOut(300).fadeIn(300);
  });
});

$(function(){
  $("#cardbtn2").on("click", function(){
    $("#card2").fadeOut(300).fadeIn(300);
  });
});

$(function(){
  $("#cardbtn3").on("click", function(){
    $("#card").fadeOut(300).fadeIn(300);
  });
});

$(document).ready(function(){
  $("#button").click(function(){
    $("#text").slideToggle("fast", function(){
      alert("Element toggled/clicked");
    });
  });
});

$(document).ready(function(){
  $(".dropdown-toggle").dropdown();
});
