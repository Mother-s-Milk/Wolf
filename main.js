/*MENU*/
document.querySelector('.nav-icon-menu').addEventListener('click', () => {
	document.querySelector('.menu-responsive-container').classList.toggle('show');
})


/*SLIDER*/
let slider = document.querySelector(".slider-container")
let sliderIndividual = document.querySelectorAll(".slider-content")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize", function(){
	width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
	slides();
},intervalo);

function slides(){
	slider.style.transform = "translate(" + (-width*contador) + "px)";
	slider.style.transition = "transform 1.5s"
	contador++;

	if(contador == sliderIndividual.length){
		setTimeout(function(){
			slider.style.transform = "translate(0px)";
			slider.style.transition = "transform 0s"
			contador = 1;
		},2500)
	}
}
