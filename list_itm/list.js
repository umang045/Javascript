let inputText = document.getElementById("text");
let btn = document.getElementById("btn");
let btn_asc = document.getElementById("btn_asc");
// console.log(btn_asc);
let btn_dsc = document.getElementById("btn_dsc");

let container = document.getElementById("container");
let arr = [];

btn.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("please enter something!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    arr.push(inputText.value);
    container.appendChild(li);
    // arr.sort();
    // console.log(arr);
  }
});

btn_asc.addEventListener("click", () => {
  //To remove all elements
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  arr.sort();
  arr.map((item, index) => {
    let li = document.createElement("li");
    return (li.innerHTML = item), container.appendChild(li);
  });
});

btn_dsc.addEventListener("click", () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  arr.sort().reverse();
  arr.map((item, index) => {
    let li = document.createElement("li");
    return (li.innerHTML = item), container.appendChild(li);
  });
});
