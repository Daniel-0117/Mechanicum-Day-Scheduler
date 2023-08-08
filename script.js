// Wrap all code that interacts with the DOM in a call to jQuery to ensure that



// the code isn't run until the browser has finished rendering all the elements
// in the html.
$( document ).ready(function(){

  $("#currentDay").text(dayjs().format("MMMM DD, YYYY"))
  // TODO: Add a listener for click events on the save button. This code should
  $( ".saveBtn" ).on( "click", function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });

  function timeTracker() {

    //get current number of hours.
    var timeNow = dayjs().hour();
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);

    if (blockTime < timeNow) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else {
    if (blockTime === timeNow) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  }
});
}

timeTracker();

setInterval(timeTracker, 1000);

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

}
);


