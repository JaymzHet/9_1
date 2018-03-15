var triangle1Area = getTriangleArea(5, 10),
    triangle2Area = getTriangleArea(2,-3),
    triangle3Area = getTriangleArea(5, 6);

function getTriangleArea(a, h) {

  if (a <= 0 || h <= 0) {

    return 'Parameters are incorrect';

    } else {

    return a * h / 2; 
  }
}

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);




