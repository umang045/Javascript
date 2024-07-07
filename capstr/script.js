let name = "hi my name is umang rathod ..// hh";
// console.log(name);
let ar = name.split(" ");
console.log(ar);

let newStr = "";
let newarr = [];


ar.map((item, index) => {
  if (item != "") {
    newStr = newStr + item[0].toUpperCase() + item.slice(1) + " ";
  }
});
console.log(newStr);
