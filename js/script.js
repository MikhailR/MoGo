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


/*Прокрутка блоков в разделе отзывов*/ 
var buttonReviewPrev = document.querySelector('.review__arrow--prev');
var buttonReviewNext = document.querySelector('.review__arrow--next');
var reviewArray = document.querySelectorAll('.review__element');
var a = 0, b;
function reviewNext() {
	if((reviewArray.length - a) > 1)
	{	  			
		reviewArray[a].style.order = a+1;
		a++;
	}
};
function reviewPrev() {
 	if(a>0)
 	{
 		b = a - 1;
  		reviewArray[b].style.order = 0;
  		a--;
  	}
 };
buttonReviewNext.addEventListener('click', reviewNext);
buttonReviewPrev.addEventListener('click', reviewPrev);