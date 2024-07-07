val = document.getElementById("txt");
btn = document.getElementById("btn");
ul = document.getElementById("task");

let task = [];

btn.addEventListener("click", () => {
  if (val.value === "") {
    alert("enter value");
  } else {
    task.push(val.value);
  }

  let li = document.createElement("li");
  let span = document.createElement("span");
  li.innerHTML = val.value;
  span.textContent = "delete";
  span.classList.add = "delete";
  li.appendChild(span);
  ul.appendChild(li);
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    // let li = event.target.parentElement;
    // li.remove();
    // task.splice(task.indexOf(li.textContent), 1);
    console.log('hello');
  }
});
