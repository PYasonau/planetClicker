$('.shop-menu-btn').click(function(e) {
  e.preventDefault();
  $('.shop-menu').toggleClass('shop-menu_active');
});

//$('#responsiveTabsDemo').responsiveTabs({
//	    startCollapsed: 'accordion'
//	});
// для вкладок https://pcvector.net/scripts/tabs/470-adaptivnye-vkladki-responsive-tabs.html

//параллакс эффект
$(document).on('mousemove', function(e) {
            var X = 10 * ((e.pageX + 1) / $(document).width()) - 120;
            var Y = 10 * ((e.pageY + 1) / $(window).height()) - 200;

            $('.parallax__layer').css('background-position', X + 'px ' + Y + 'px');
} ); 


let score = 0; // кол-во кликов
let currentClicks = 1; // текущие нажатия


// загрузка информации при загрузке страницы
function load(){
	this.score = 0;
	this.currentClicks = 1;
	this.score = localStorage.getItem("score");
	this.score = parseInt(score);

	currentClicks = localStorage.getItem("currentClicks");
	currentClicks = parseInt(this.currentClicks);
    //del
	document.querySelector('.currentClicks').innerHTML = this.currentClicks;
	
	document.querySelector('.score').innerHTML = this.score;
}
function addClicks(){
	this.currentClicks = this.currentClicks + 1;
	localStorage.setItem("currentClicks", this.currentClicks);
	//del
	document.querySelector('.currentClicks').innerHTML = this.currentClicks;
}
// добавление кликов при нажатии на планету
function addScore(){
	this.score = this.score + currentClicks;
	document.querySelector('.score').innerHTML = this.score;
	



