//Name: Mason Cutts
//File: main.js
//Date: 24 March 2025
//This file is js for displaying a webpage that displays an image gallery

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */
const altText = {
	'pic1.jpg' : 'picture of eye',
	'pic2.jpg' : 'picture of a beach', 
	'pic3.jpg' : 'picture of purple and white flowers', 
	'pic4.jpg' : 'picture of ancient egyption people', 
	'pic5.jpg' : 'picture of a moth on a leaf' 
};

/* Looping through images */
for (const image of images) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', `images/${image}`);
	newImage.setAttribute('alt', altText[image]);
	thumbBar.appendChild(newImage);	
	newImage.addEventListener('click', i => {
		displayedImage.src = i.target.src;
		displayedImage.alt = i.target.alt;
	});
}

/* Wiring up the Darken/Lighten button */
