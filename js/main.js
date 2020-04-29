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


var score = 0; // кол-во кликов
var currentClicks = 1; // текущие нажатия


// загрузка информации при загрузке страницы
function load(){
	score = localStorage.getItem("score");
	score = parseInt(score);

	currentClicks = localStorage.getItem("currentClicks");
	currentClicks = parseInt(currentClicks);
    //del
	document.querySelector('.currentClicks').innerHTML = currentClicks;
	
	document.querySelector('.score').innerHTML = score;
}
function addClicks(){
	currentClicks = currentClicks + 1;
	localStorage.setItem("currentClicks", currentClicks);
	//del
	document.querySelector('.currentClicks').innerHTML = currentClicks;
}
// добавление кликов при нажатии на планету
function addScore(){
	score = score + currentClicks;
	document.querySelector('.score').innerHTML = score;
	localStorage.setItem("score", score);
}




