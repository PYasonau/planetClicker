
// загрузка информации при загрузке страницы
function load(){
	toggleClass();
	parralacsEffect();
	firstLoadInit();
	
    //del
	document.querySelector('.currentClicks').innerHTML = getCurrentClicks();
	
	document.querySelector('.score').innerHTML = getScore();
}

addClicks = () => {
	var currentClicksNew = getCurrentClicks() + 1;
	setCurrentClicksLs(currentClicksNew);
	//del
	document.querySelector('.currentClicks').innerHTML = currentClicksNew;
}

// добавление кликов при нажатии на планету
addScore = () => {
	console.log('clicked')
	var scoreNew = getScore() + getCurrentClicks();
	console.log(scoreNew)
	setScoreToLs(scoreNew);
	document.querySelector('.score').innerHTML = scoreNew;
}

toggleClass = () => {
	$('.shop-menu-btn').click(function(e) {
  e.preventDefault();
  $('.shop-menu').toggleClass('shop-menu_active');
});
}

parralacsEffect = () => {
	$(document).on('mousemove', function(e) {
            var X = 10 * ((e.pageX + 1) / $(document).width()) - 120;
            var Y = 10 * ((e.pageY + 1) / $(window).height()) - 200;

            $('.parallax__layer').css('background-position', X + 'px ' + Y + 'px');
} ); 
}

getScore =() => {
	return parseInt(localStorage.getItem("score"));
}

getCurrentClicks =() => {
	return parseInt(localStorage.getItem("currentClicks"));
}

setScoreToLs = (score) => {
	localStorage.setItem("score", score);
}

setCurrentClicksLs = (currentClicks) => {
	localStorage.setItem("currentClicks", currentClicks);
}

isInitiated = () => {
	return localStorage.getItem("initiated") || false;
}

setInitiated = () => {
	localStorage.setItem("initiated", true);
}

firstLoadInit = () => {
if(!isInitiated()){
	setScoreToLs(0);
	setCurrentClicksLs(0);
	setInitiated();
}

}