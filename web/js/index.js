

$(document).ready(function() {
  $("#btn1").hover(function() {
    $("#mnav1").fadeToggle("fast");
  });

  $("#btn2").hover(function() {
    $("#mnav2").fadeToggle("fast");
  });
  $("#btn3").hover(function() {
    $("#mnav3").fadeToggle("fast");
  });
  $("#btn4").hover(function() {
    $("#mnav4").fadeToggle("fast");
  });
});
var i = 1;
function bannergo(num) {
  if (i <= 0) {
    i = 3;
  }
  if (i > 3) {
    i = 1;
  }

  var y = 3;
  while (y >= 1) {
    if (y != i) {
      var divname = "#storebannerimgdiv" + y.toString();
      $(divname).fadeOut("fast");
    } else {
      var divname = "#storebannerimgdiv" + y.toString();
      $(divname).fadeIn("fast");
    }
    y--;
  }
  if (num == 1) {
  } else {
    i++;
  }

  console.log(i);
}

setInterval(function() {
  $(document).ready(function() {
    bannergo(0);
  });
}, 3000);
