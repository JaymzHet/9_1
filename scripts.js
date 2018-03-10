var triangle1Area = getTriangleArea(-5, 10),
    triangle2Area = getTriangleArea(2, 3),
    triangle3Area = getTriangleArea(30, -50);

function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        console.log('Parameters are incorrect');
    } else {
      	return console.log(a * h / 2);
    }
}
