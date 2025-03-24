//Name: Mason Cutts
//File: main.js
//Date: 24 March 2025
//This file is js for displaying a webpage that displays an image gallery

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {'images/pic1.jpg' : 'picture of eye', 'images/pic2.jpg' : 'picture of a beach', 'images/pic3.jpg' : 'picture of purple and white flowers', 
'images/pic4.jpg' : 'picture of ancient egyption people', 'images/pic5.jpg' : 'picture of a moth on a leaf' };

/* Looping through images */
for (const file in fileNames) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', 'fileNames/${file}');
	newImage.setAttribute('alt', 'altText[file]');
	thumbBar.appendChild(newImage);	
}

/* Wiring up the Darken/Lighten button */
