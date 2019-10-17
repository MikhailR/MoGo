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


/*Прокрутка блоков в первом разделе отзывов (после описания направлений работы)*/ 
var buttonReview1Prev = document.querySelector('.review1__arrow--prev');
var buttonReview1Next = document.querySelector('.review1__arrow--next');
var review1Array = document.querySelectorAll('.review1__element');
var a = 0, b;
function review1Next() {
	if((review1Array.length - a) > 1)
	{	  			
		review1Array[a].style.order = a+1;
		a++;
	}
};
function review1Prev() {
 	if(a>0)
 	{
 		b = a - 1;
  		review1Array[b].style.order = 0;
  		a--;
  	}
 };
buttonReview1Next.addEventListener('click', review1Next);
buttonReview1Prev.addEventListener('click', review1Prev);

/*Прокрутка блоков во втором разделе отзывов (после раздела с работами)*/ 
var buttonReview2Prev = document.querySelector('.review2__arrow--prev');
var buttonReview2Next = document.querySelector('.review2__arrow--next');
var review2Array = document.querySelectorAll('.review2__element');
var c = 0, d;
function review2Next() {
	if((review2Array.length - c) > 1)
	{	  			
		review2Array[c].style.order = c+1;
		c++;
	}
};
function review2Prev() {
 	if(c>0)
 	{
 		d = c - 1;
  		review2Array[d].style.order = 0;
  		c--;
  	}
 };
buttonReview2Next.addEventListener('click', review2Next);
buttonReview2Prev.addEventListener('click', review2Prev);