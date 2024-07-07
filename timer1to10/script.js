let count = document.getElementById("count");
let btn = document.getElementById("btn");
let flag = 0,
  i = 0;
btn.addEventListener("click", () => {
  if (flag == 0) {
    let inrvl = setInterval(() => {
      if (i <= 10) {
        if (i == 10) {
          flag = 10;
          i=0;
          count.innerHTML = i;
          clearInterval(inrvl);
        } else {
          count.innerHTML = i;
          i++;
        }
      }
    }, 1000);
  }

  if (flag == 10) {
    let minus = setInterval(() => {
      if (flag >= 0) {
        if (flag == 0) {
          flag = 0;
          count.innerHTML = flag;
          clearInterval(minus);
        } else {
          count.innerHTML = flag;
          flag--;
        }
      
      }
    }, 1000);
  }
});
