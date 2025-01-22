const pi = 3.14;
var radius = 6.378e10;
let circumference = 2*pi*radius;
let surfaceArea = 4*pi*(radius**2);
let volume = (4/3*pi*(radius**3));

document.write('The radius of the sphere is: ' +radius+'.' +"<br></br>");
document.write('The circumference of the sphere is: ' +circumference+'.' +"<br></br>");
document.write('The surface area of the sphere is: ' +surfaceArea+'.' +"<br></br>");
document.write('The volume of the sphere is: ' +volume+'.');