let hourtag = document.getElementById("hour");
let minutetag = document.getElementById("miniute");
let secondtag = document.getElementById("seconds");
let stamp = document.getElementById("stamp");

clock = () => {
  //need to create an object
  const date = new Date();
  let hour = date.getHours();

  //logic for an 13 to 1
  if (hour >= 12) {
    hour -= 12;
    stamp.innerHTML = "PM";
  } else if (hour === 0) {
    hour = 12;
    stamp.innerHTML = "AM";
  } else {
    stamp.innerHTML = "AM";
  }

  //display time
  hourtag.innerHTML = hour.toString();
  minutetag.innerHTML = date.getMinutes();
  secondtag.innerHTML = date.getSeconds();
  
  //   date.getHours() <= 12 ? (stamp.innerHTML = "AM") : (stamp.innerHTML = "PM");
};

clock();

//do some work which require some time period
setInterval(clock, 1000);

// console.log(hour);
