console.log("Hello World");
var a = 1;
a = "Hello";
var b = 2;
console.log(a);
console.log(b);

function fuc() {
  for (var i = 0; i < 10; i++) {}
}
for (var j = 0; j < 10; j++) {}
console.log(j);
var c;
console.log(c);
if (!0) {
  var d = 1;
}
console.log(d);

var obj = {
  propertyA: 1,
  propertyB: "Hello",
  propertyC: true,
  func: function () {
    console.log("Hello from obj.func");
  },
};

var ary = [1, "Hello", true];
console.log(ary);
var func = function (i1, i2) {
  console.log("Hello from func");
};

if (a === undefined) {
  console.log("c is undefined");
} else {
  console.log("c is defined");
}

(function () {
  var width = screen.width;
  var height = screen.height;
  var t = width * height;
})();

function handleSmall() {
  console.log("handle small");
}

function handleEqual() {
  console.log("handle equal");
}

function handleLarge() {
  console.log("handle large");
}
guess(5, handleSmall, handleEqual, handleLarge);
