$(document).ready(function() {
  $("#fb1.flip-box").on('click', function() {
    if($("#fb1 div.flip-box-inner.flip-animation").hasClass("flip-animation")) {
      $("#fb1 div.flip-box-inner.flip-animation").removeClass("flip-animation")
    } else {
      $("#fb1 div.flip-box-inner").addClass("flip-animation")
    }
  })

  $("#fb2.flip-box").on('click', function() {
    if($("#fb2 div.flip-box-inner.flip-animation").hasClass("flip-animation")) {
      $("#fb2 div.flip-box-inner.flip-animation").removeClass("flip-animation")
    } else {
      $("#fb2 div.flip-box-inner").addClass("flip-animation")
    }
  })

  $("#fb3.flip-box").on('click', function() {
    if($("#fb3 div.flip-box-inner.flip-animation").hasClass("flip-animation")) {
      $("#fb3 div.flip-box-inner.flip-animation").removeClass("flip-animation")
    } else {
      $("#fb3 div.flip-box-inner").addClass("flip-animation")
    }
  })
})
