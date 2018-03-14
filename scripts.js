/*
var triangle1Area = getTriangleArea(-5, 10),
    triangle2Area = getTriangleArea(2, 3),
    triangle3Area = getTriangleArea(5, 6);

function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        console.log('Parameters are incorrect');
    } else {
      	return console.log(a * h / 2);
    }
}
*/
var a = triangle1Area = getTriangleArea(-5, 10);
var b = triangle1Area = getTriangleArea(2, 3);
var c = triangle1Area = getTriangleArea(5, 6);
var triangle1Area = getTriangleArea(a, b);
var x = 0;
function getTriangleArea(a, h) {

  if (!isNaN(a) && !isNaN(h)) {
    	if ((a > 0) && (h > 0))
    {
      	console.log((a * h) / 2);
      	return x = ((a * h) / 2);
    } else {
    	console.log('Parameters are incorrect');
    }
  }
  else {
    	console.log('Parameters are not numbers');
  }
}

