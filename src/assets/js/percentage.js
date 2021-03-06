// Possibly change mixture of vanilla JS and jQuery into only one type.

// Get attribute values from elements
var $contVal = $('#cont').attr('data-pct');
var $contVal2 = $('#cont2').attr('data-pct');
var $contVal3 = $('#cont3').attr('data-pct');
var $contVal4 = $('#cont4').attr('data-pct');
// Store inside array
var arrCont = [$contVal, $contVal2, $contVal3, $contVal4];

var $circle = $('#bar1');
var $circle2 = $('#bar2');
var $circle3 = $('#bar3');
var $circle4 = $('#bar4');
// Added elements into second array
var arrCircle = [$circle, $circle2, $circle3, $circle4];

// For loop to assign percentage styles to each circle.
for (var i = 0; i < arrCont.length; i++) {
  var r = arrCircle[i].attr('r');

  var c = Math.PI*(r*2);

  var pct = ((100-arrCont[i])/100)*c;

  arrCircle[i].css({
    strokeDashoffset: pct
  });
}
