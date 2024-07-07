inputdate = document.getElementById("date");
calc = document.getElementById("calc");

calc.addEventListener("click", () => {
  const date = new Date();
  const Newdate = inputdate.value.split("-");
  console.log(Newdate);
  currDate = date.getDate();
  currMon = date.getMonth();
  curryr = date.getFullYear();

  //   console.log(currDate, currMon, curryr);
  ageYr = curryr - Newdate[0];

  if (currMon < parseInt(Newdate[1])) {
    ageYr--;
  }
  console.log(ageYr);
});
