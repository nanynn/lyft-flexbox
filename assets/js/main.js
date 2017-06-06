var navegador = document.getElementById('nav');

window.onscroll = function(){
	"use strict";
	if(document.body.scrollTop >= 280){
		navegador.classList.add('scroll');
	} else{
		navegador.classList.remove('scroll');
	}
};