//Name: Mason Cutts
//File: main.js
//Date: 9 April 2025
//This file is js for displaying a wildlife webpage

// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if (showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// adding the accessibility for keys to open and close the comment boxes
document.addEventListener('keydown', function(event) {
	//if o is pressed, it will open the comment box
  if (event.key === 'o' || event.key === 'O') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
	//if o is pressed, it will open the comment box
  } else if (event.key === 'c' || event.key === 'C') {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
});


// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
