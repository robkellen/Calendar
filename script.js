//access local storage
function getLocalStorage(key){
  const value = localStorage.getItem(key);
  if (value) {
    $("#text${key}").text(value);
  }

}

//execute the following function after page is fully loaded
$(document).ready(function() {
//current day is displayed at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMMM Do"));


//for loop to create schedule content
for (let i = 9; i < 18; i++) {
  //create new rows for each hour
  const row = $(`<div data-time=${i} id='${i}' class="row">`);

  //create new column to display the hour for each row
  const column1 = $("<div class='col-sm-2'> <p class='hour'>" + formatAMPM(i) + "</p>");
  //create new column for text area to hold event schedule
  const column2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);    
  //create new column to display save buttons for each row
  const column3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)

  //appending the columns to the rows
  row.append(column1);
  row.append(column2);
  row.append(column3);
//appending the rows to the HTML page
  $(".container").append(row);
//accessing local storage to obtain current time
  getLocalStorage(i);
}

function formatAMPM(hours) {
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return hours + ampm;
}
formatAMPM();
   
});

// var time = new Date().getHours();
// if (time >= 12) {
//   time = time + "pm";
// } else if (time / 12 === 1) {
//   time = 12 + "pm"
// } else {
//   time = time + "am"
// };
// return time;




  
  
  


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist