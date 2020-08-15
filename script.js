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
  const row = $("<div date-time=[i] id=[i] class='row'>");

  //create new column to display the hour for each row
  const column1 = $("<div id=[i] class='col-sm-1'>");
  //create new column for text area to hold event schedule
  const column2 = $("<div class='col-sm-10 past><textarea id=text[i] class='description' placeholder='Add Event Here...'</textarea>");
  //create new column to display save buttons for each row
  const column3 = $("<div class='col-sm-1'><button class='saveBtn' id=[i]><i class='fas fa-save'></i><button>");

  row.append(column1);
  row.append(column2);
  row.append(column3);

  $(".container").append(row);
  
}
});
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist