/*

In a new js file, create an array (and assign it to a variable) containing the days of the week as strings, with Monday as the first and Sunday as the last.

My calendar says Sunday is the first day of the week. Write code to move Sunday from the end of the array to the beginning.

I'm really excited about Friday for some reason. Write code to find that day in the array and make it all uppercase.

Create and assign a new array which contains two sub-arrays: One containing all the weekdays, and one containing the weekends.

Let's get in touch with our Bogan heritage. With your new array of arrays, write code that will change Wednesday to "Stubbies Day".

On second thought, I don't like weekdays at all. Write code that deletes the weekdays from the array of arrays, leaving only the weekends.

Going back to your original array of days, write code that sorts the days alphabetically and assigns these to a new variable.

Finally, print out (on the console) the list of sorted days, with each day on its own line.

*/

// Create a variable with the days of the week
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// days.pop();
// days.unshift("Sunday");

// Or the shortcut method is
// You want to move the pop index into the beginning
days.unshift(days.pop());

// Base variable for the FUNCTION findDay
var dayIndex;

// For the sake of experiment, let's write a function
function findDay(a){
	dayIndex = days.indexOf(a);
}

// Finding the index for "Friday" in array
findDay("Friday");

// Asign the transform uppercase FRIDAY back to the array
days[dayIndex] = days[dayIndex].toUpperCase();

// Create a variable for weekdays
var weekdays = days.slice(1,6);

// Creating and Assign Two new arrays inside the array
var listDays = [
	// No need square brackets because the result of this variable is already an array
	weekdays,
	[days[0], days[6]]

];

// Find the indexOf Wednesday
var bogan = listDays[0].indexOf("Wednesday");
// Remove and add in
listDays[0].splice(bogan, 1, "Stubbies Day") ;

// Remove the first array using SHIFT
listDays.shift();

// Create a variable sortDay that Sort the days
var sortDay = days.sort();

var htmlText = document.getElementById("input");

// Using FOR loop just grab the index of the array
for(var i = 0; i < days.length; i++) {
	htmlText.innerHTML += "<li>" + sortDay[i] + "</li>";
}

















