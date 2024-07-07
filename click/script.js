let txt = document.getElementById("text");
let arr = ["umang", "Himanshu", "Ajay"];

let i = 0;
txt.addEventListener("click", () => {
  if (i == arr.length) {
    i = 0;
    txt.innerHTML = arr[i];
    i++;
  } else {
    txt.innerHTML = arr[i];
    i++;
  }
});
