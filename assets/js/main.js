

window.addEventListener = function(){
 	const bajada = window.pageYOffset || document.documentElement.scrollTop,
 	navegador = document.getElementById('nav');

	if(bajada > 60){
		navegador.classList.add('scroll');
		document.getElementById('primero').classList.add('');
		document.getElementById('segundo').classList.add('');
		document.getElementById('tercero').classList.add('');
		document.getElementById('cuarto').classList.add('');
		document.getElementById('quinto').classList.add('');
	} else{
		navegador.classList.remove('scroll');
		document.getElementById('').classList.remove('');

	}
};