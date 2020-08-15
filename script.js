//access local storage
function getLocalStorage(key) {
  const value = localStorage.getItem(key);
  if (value) {
    $(`#text${key}`).text(value);
  }
}

//execute the following function after page is fully loaded
$(document).ready(function () {
  //current day is displayed at the top of the calendar
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  //for loop to create schedule content
  for (let i = 9; i < 18; i++) {
    //create new rows for each hour
    const row = $(`<div data-time=${i} id='{i}' class="row">`);

    //create new column to display the hour for each row
    const column1 = $(
      "<div id='column1' class='col-sm-2'> <p class='hour'>" + formatAMPM(i) + "</p>"
    );
    //create new column for text area to hold event schedule
    const column2 = $(
      `<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`
    );
    //create new column to display save buttons for each row
    const column3 = $(
      `<div id='column3' class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`
    );

    //appending the columns to the rows
    row.append(column1);
    row.append(column2);
    row.append(column3);
    //appending the rows to the HTML page
    $(".container").append(row);
    //accessing local storage to obtain current time
    getLocalStorage(i);
  }
  //to format time block to read 'am' for morning hours or 'pm' for afternoon hours
  function formatAMPM(hours) {
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ampm;
  }
  formatAMPM();
  //change background color based on current time for user's location
  function backgroundColors() {
    const currentTime = new Date().getHours();
    for (let i = 0; i < array.length; i++) {
      if ($(`#${i}`).data("time") == currentTime) {
        $(`#text${i}`).addClass("present");
      } else if (currentTime < $(`#${i}`).data("time")) {
        $(`#text${i}`).addClass("future");
      }
    }
  }
  //set interval to refresh background colors every 5 minutes based on the time at user's location
  setInterval(function () {
    updateColors();
  }, 300000);

  var saveEntryBtn = $(".saveBtn");
  saveEntryBtn.on("click", function () {
    let eventId = $(this).attr("id");
    let eventText = $(this).parent().siblings().children(".description").val();
    localStorage.setItem(eventId, eventText);
  });
});
