// to show the current date
var todaysDate = moment();
var todaysTime = todaysDate.format("hA");
$("#currentDay").text(todaysDate.format("dddd, MMMM Do"));


var saveBtn;
var currentTimeIndex;

//assign variable to div class = 'container' to create timeblocks
var planner = $('.container');
var workHours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
];

//function to display working hours, the input and save button
function getWorkHours() {

    for (var i = 0; i < workHours.length; i++) {
        // create a row-dv
        var rowDiv = $('<div>');
        rowDiv.attr('class', 'row time-block');

        //create a column for the time
        var timeEl = $('<div>');
        timeEl.attr('class', 'col-lg-2 col-md-2 hour');
        timeEl.text(workHours[i]);
        var currentTimeIndex = workHours.indexOf(todaysTime)
        //create a column for text area, where user inputs on calendar
        var textInput = $('<textarea>');
        textInput.attr('class', 'col-lg-9 col-md-9');
        textInput.attr('id',workHours[i]);
        //checks for current time and appliess class if row is present, past or future
        if (currentTimeIndex === workHours.indexOf(workHours[i])) {
            textInput.addClass('present');
        } else if (currentTimeIndex > workHours.indexOf(workHours[i])) {
           textInput.addClass('past');
        }else if (currentTimeIndex < workHours.indexOf(workHours[i])) {
            textInput.addClass('future')
        }
        
        //create a save button
        var saveButton = $('<button>');
        saveButton.attr('class', 'fa fa-save col-lg-1 col-md-1 saveBtn');
        saveButton.attr('id', workHours[i]);

        //then append the button, textarea and timeEl to row
        rowDiv.append(timeEl);
        rowDiv.append(textInput);
        rowDiv.append(saveButton);
        planner.append(rowDiv);
    }
}

var storedTask;
var task;

//runs when the page loads up
getWorkHours();

//this event listener runs when user wants to save a task
$('button').on('click',function(event){
    event.preventDefault();
    var task = event.target.previousElementSibling.value;
    localStorage.setItem(event.target.attributes[1].value, task);
});

// this function runs when the page loads, and persists the data
// from local storage

function displayTasks() {
    var nineAm = localStorage.getItem("9AM");
    var tenAm = localStorage.getItem("10AM");
    var elevenAm = localStorage.getItem("11AM");
    var twelvePm = localStorage.getItem("12PM");
    var onePm = localStorage.getItem("1PM");
    var twoPm = localStorage.getItem("2PM");
    var threePm = localStorage.getItem("3PM");
    var fourPm = localStorage.getItem("4PM");
    var fivePm = localStorage.getItem("5PM");

    $("#9AM").text(nineAm);
    $("10AM").text(tenAm);
    $("#11AM").text(elevenAm);
    $("#12PM").text(twelvePm);
    $("#1PM").text(onePm);
    $("#2PM").text(twoPm);
    $("#3PM").text(threePm);
    $("#4PM").text(fourPm);
    $("#5PM").text(fivePm);
};

displayTasks();