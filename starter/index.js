// to show the current date
var todaysDate = moment("5PM","hA");
var todaysTime = todaysDate.format("hA");
$("#currentDay").text(todaysDate.format("dddd, MMMM Do"));

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

//function to display working hours the input and save button
function getWorkHours() {

    for (var i = 0; i < workHours.length; i++) {
        // create a row-dv
        var rowDiv = $('<div>');
        rowDiv.attr('class', 'row time-block');

        //create a column for the time
        var timeEl = $('<div>');
        timeEl.attr('class', 'col-lg-1 col-md-1 hour');
        timeEl.text(workHours[i]);

        //create a column for text area, where user inputs on calendar
        var textInput = $('<textarea>');
        textInput.attr('class', 'col-lg-10 col-md-10');
        //checks for current time
        if (todaysTime === workHours[i]) {
            textInput.addClass('present');
            }
        
        //create a save button
        var saveButton = $('<button>');
        saveButton.attr('class', 'fa fa-save col-lg-1 col-md-1 saveBtn');

        //then append the button, textarea and timeEl to row
        rowDiv.append(timeEl);
        rowDiv.append(textInput);
        rowDiv.append(saveButton);
        planner.append(rowDiv);

        
        
    }
}



console.log(todaysTime)

//runs when the page loads up
getWorkHours();
