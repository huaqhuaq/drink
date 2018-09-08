placeholderPic();
function placeholderPic(){
	var w = document.documentElement.offsetWidth;
	if(w<769){
		document.documentElement.style.fontSize=w/7.2+'px';
	}
}
window.onresize=function(){
    placeholderPic();
}
