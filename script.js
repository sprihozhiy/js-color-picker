var color1 = document.getElementById('firstColor');
var color2 = document.getElementById('secondColor');
var color3 = document.getElementById('thirdColor');


color1.oninput = function() {
  document.getElementById('rangeOutput1').innerHTML = color1.value;
  document.getElementById('firstCircle').style.backgroundColor = "rgb(" + color1.value + ", 0, 0)";
  document.getElementById('outputColor').style.backgroundColor = "rgb("+ color1.value + ", " + color2.value + ", " + color3.value +")";
  document.getElementById('rgb1').innerHTML = color1.value;
};

color2.oninput = function() {
  document.getElementById('rangeOutput2').innerHTML = color2.value;
  document.getElementById('secondCircle').style.backgroundColor = "rgb(0, " + color2.value + ", 0)";
  document.getElementById('outputColor').style.backgroundColor = "rgb("+ color1.value + ", " + color2.value + ", " + color3.value +")";
  document.getElementById('rgb2').innerHTML = color2.value;
};

color3.oninput = function() {
  document.getElementById('rangeOutput3').innerHTML = color3.value;
  document.getElementById('thirdCircle').style.backgroundColor = "rgb(0, 0, " + color3.value + ")";
  document.getElementById('outputColor').style.backgroundColor = "rgb("+ color1.value + ", " + color2.value + ", " + color3.value +")";
  document.getElementById('rgb3').innerHTML = color3.value;
};
