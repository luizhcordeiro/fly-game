//variaveis de tamanho da tela -- screen size variables
var hei = 0 
var wid = 0 
//variavel de vidas -- life variable
var life = 1
// variavel tempo do jogo -- Time game variable
var time = 20
// variavel com nível do jogo -- level variable
var timeFlyCreate = 2000
var level = window.location.search
var level = level.replace('?', '')

// lógica com o nível do jogo -- logic with game level
if (level === '1'){
	var timeFlyCreate = 2000
}else if(level === '2'){
	var timeFlyCreate = 1500
}else if(level === '3'){
	var timeFlyCreate = 1000
}else if(level === '4'){
	var timeFlyCreate = 750
}

// lógica de tempo e vitória -- time and victory logic
var stopwatch = setInterval (function() {
	time -= 1
	if(time < 0){
		clearInterval(stopwatch)
		clearInterval(flyOn)
		window.location.href = "winner.html"
	}else{
		document.getElementById('gameTime').innerHTML = time
	}
}, 1000)

//função que ajusta tamanho do Palco do jogo -- function that adjusts game Stage size
function adjustSize(){
	hei = window.innerHeight
	wid = window.innerWidth	
}
adjustSize();


//função que cria de forma randomica a mosca em uma posição da tela -- function that randomly creates the fly at a screen position
function dinamicImg(){
	//removendo o mosquito anterior (caso exista) -- removing the previous mosquito (if it exists)
	if(document.getElementById('fly')) {
		document.getElementById('fly').remove()

		// controlando a vida
		if(life > 3) {
			window.location.href = "gameover.html"
		}else{
			document.getElementById('l' + life).src = "img/empty-heart.png"
			life++
		}
	}

	//variaveis de posição da mosca -- fly positon variables
	var positionX = Math.floor(Math.random() * wid) - 90
	var positionY = Math.floor(Math.random() * hei) - 90

	// corrigir bug caso a posição de inferior a 0 -- fix bug if the position is less than 0
	positionX = positionX < 0 ? 0 : positionX
	positionY = positionY < 0 ? 0 : positionY

	//criação do elemento HTML	-- creating the html element
	var fly = document.createElement('img');
	fly.src = 'https://www.animatedimages.org/data/media/197/animated-fly-image-0039.gif';
	fly.className = randomSize() + ' ' + randomSide()
	fly.style.left = positionX + 'px'
	fly.style.top = positionY + 'px'
	fly.style.position = 'absolute'
	fly.id = 'fly'
	fly.onclick = function() {
		this.remove()
	}
	
	document.body.appendChild(fly);
}	


// função que cria o tamanho da mosca de forma randômica -- function that randomly creates the size of the fly
function randomSize() {
	var flyClass = Math.floor(Math.random() * 3);

	switch(flyClass) {
		case 0:
			return 'fly1'

		case 1:
			return 'fly2'

		case 2:
			return 'fly3'
	 }
}

// função para lado aleatório da mosca -- function for random side of the fly
function randomSide() {
	var flyClass = Math.floor(Math.random() * 2);

	if (flyClass == 1) {
		return 'flyInvert'
	 }
}
