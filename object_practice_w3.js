/* 
Write a JavaScript program to list the properties of a JavaScript object.
*/

function _keys(obj) {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

/*
Write a JavaScript program to get the length of a JavaScript object.
*/

Object.objsize = function (Myobj) {
  var osize = 0,
    key;
  for (key in Myobj) {
    if (Myobj.hasOwnProperty(key)) osize++;
  }
  return osize;
};

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

var objsize = Object.objsize(student);
console.log("Size of the current object : " + objsize);
