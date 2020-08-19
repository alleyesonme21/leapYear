// Business Logic
function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return year + " It's a leap year";
  } else {
    return year + " It's not a leap year";
  }
}

//User Interface Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const inputYear = $("#year").val();
   let leapYear = isLeapYear(inputYear);
    $("#output").text(leapYear);
  })
})