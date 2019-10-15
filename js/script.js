var arrow = document.querySelectorAll('.list__arrow');
var text = document.querySelectorAll('.list__description');

function openText(arr, txt) {
	txt.classList.add('list__description--open');
	arr.classList.add('list__arrow--open');
}

function closeText(arr, txt) {
	txt.classList.remove('list__description--open');
	arr.classList.remove('list__arrow--open');
}

function clickFunction(arr, txt) {	
 	if(arr.className.indexOf('list__arrow--open') === -1)
  	{  openText(arr, txt);}
  		else {	closeText(arr, txt);}
}

arrow[0].addEventListener('click', function() {
	clickFunction(arrow[0],text[0]);
});

arrow[1].addEventListener('click', function() {
	clickFunction(arrow[1],text[1]);
});

arrow[2].addEventListener('click', function() {
	clickFunction(arrow[2],text[2]);
});