console.log("test");
var hamberger= document.querySelector('.hamberger');
var times= document.querySelector('.times');
var mobileNav= document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
	mobileNav.classList.add('open');
});
times.addEventListener('click', function(){
	mobileNav.classList.remove('open');
});