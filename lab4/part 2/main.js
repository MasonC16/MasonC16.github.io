//Name: Mason Cutts
//File: main.js
//Date: 24 March 2025
//This file is js for displaying a webpage that displays an image gallery

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

//declaring the array of image filenames
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

//declaring the alternative text for each image file
const altText = {
	'pic1.jpg' : 'picture of a child\'s eye',
	'pic2.jpg' : 'picture of a beach', 
	'pic3.jpg' : 'picture of purple and white flowers', 
	'pic4.jpg' : 'picture of ancient egyption people', 
	'pic5.jpg' : 'picture of a moth on a leaf' 
};

//looping through images
for (const image of images) {
	
	const newImage = document.createElement('img');
	//setting the attribute to look for an image src for whatever image is being showen
	newImage.setAttribute('src', `images/${image}`);
	
	//setting the attribute to look for an altText for whatever image is being displayed(or not being displayed)
	newImage.setAttribute('alt', altText[image]);
	thumbBar.appendChild(newImage);	
	
	//making it so it changes the image to whatever image was clicked on
	newImage.addEventListener('click', i => {
		displayedImage.src = i.target.src;
		displayedImage.alt = i.target.alt;
	});
}

//wiring up the Darken/Lighten button

	//adding an event listener to look for a click on the lighten/darken button
	btn.addEventListener('click', () => {
	
	//getting the class attribute to determine which option is selected
	const btnOption = btn.getAttribute('class');
	
	//if the class attribute is dark / if the picture is bright
	if(btnOption === 'dark'){
		
		//changing the attributes to be light
		btn.setAttribute('class', 'light');
		btn.textContent = 'Lighten';
		
		//making the image darker
		overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
	//if the class attrubute isn't dark	
	}else{
		
		//changing the attributes to dark
		btn.setAttribute('class', 'dark');
		btn.textContent = 'Darken';
		
		//making the image lighter
		overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
	}
});