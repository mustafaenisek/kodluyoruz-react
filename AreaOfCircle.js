const PI = 3.14;
const arguments = process.argv.slice(2);

function areaOfCircleGenerator(r) {
  return PI * r * r;
}
const foC = areaOfCircleGenerator(arguments[0] * 1);

console.log(`Radius =  ${arguments[0]} \nthe area of circle is =  ${foC}`);
