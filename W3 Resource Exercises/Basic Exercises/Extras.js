/*
Find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/

const triangle = (a, b, c) => {
    // Use Heron's formula.
    // First calculate half of the triangle's perimeter
    let s = (a+b+c)/2;
    //calculate area
    let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
    return area.toFixed(2);
}

console.log(triangle(5,6,7));


//----------------------------------------------------------------------------------------------
/*
Rotate the string 'w3resource' in right direction by periodically removing 
one letter from the end of the string and attaching it to the front.
*/

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

