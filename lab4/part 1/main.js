//Name: Mason Cutts
//File: main.js
//Date: 10 March 2025
//This file is js for creating random stories

//creating constants that are used at points in the code
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//creating a function to randomly generate a number, its used later to determine what random phrase will be used in the story
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//creating and setting the array constants and the long constant
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//the "function" that holds all the possible options that can happen if something is clicked on the website
randomize.addEventListener('click', result);

	//function for result
	function result() {
	
	//the 'let' declaration makes it so the newStory variable cant be used outside the function
	let newStory = storyText;

	//creating constants that randomly chose a index number from constants declared above
	const xItem = randomValueFromArray(insertX);
	const yItem = randomValueFromArray(insertY);
	const zItem = randomValueFromArray(insertZ);
	
	//replacing all of the blanks in the storyText with the phrases from the random index provided from the last constants
	newStory = newStory.replaceAll(':insertx:', xItem);
	newStory = newStory.replaceAll(':inserty:', yItem);
	newStory = newStory.replaceAll(':insertz:', zItem);

	//if the name box isn't filled in
	if(customName.value !== '') {
		
		//creating name constant that is equal to the name inputted in the text box
		const name = customName.value;
		
		//setting the name to 'Bob' if the user didn't input a name in the textbox
		newStory = newStory.replaceAll('Bob', name);
	}

	//checking if the "uk" button is checked or not
	if(document.getElementById("uk").checked) {
		
		//creating constants that will perform the conversions from us to uk
		const weight = `${Math.round(300*0.0714286)} stone`;
		const temperature =  `${Math.round((94-32) * 5/9)} centigrade`;
		
		//setting the newStory to be the uk system.
		newStory = newStory.replaceAll('94 fahrenheit', temperature);
		newStory = newStory.replaceAll('300 pounds', weight);
	}

	//setting the story.textContent to the new story and makes it visible on screen
	story.textContent = newStory;
	story.style.visibility = 'visible';
}