let body = document.querySelector("body");
// console.log(body);
let arr = ["hello", "how", "are", "you"];

let ul = document.createElement('ul')

let l1 = document.createElement('li')
l1.innerHTML = arr[0];

let l2 = document.createElement('li')
l2.innerHTML = arr[1];

let l3 = document.createElement('li')
l3.innerHTML = arr[2];

let l4 = document.createElement('li')
l4.innerHTML = arr[3];

ul.append(l1,l2,l3,l4);
body.appendChild(ul);