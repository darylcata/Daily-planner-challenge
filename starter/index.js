// to show the current date
var todaysDate = moment("9AM","hA");
var todaysTime = todaysDate.format("hA");
$("#currentDay").text(todaysDate.format("dddd, MMMM Do"));

