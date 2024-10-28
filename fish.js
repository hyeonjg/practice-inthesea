const fishList =[
	'./fish/fish1.png',
	'./fish/fish2.png',
	'./fish/fish3.png',
	'./fish/fish4.png',
	'./fish/fish5.png']

function fishR(){
	let fishSrc = fishList[Math.floor(Math.random()*fishList.length)];
	let x = Math.random()*window.innerWidth;
	let y = Math.random()*window.innerHeight;

	for(let i=0; i<5; i++){
		setTimeout(()=>{
			const fish = new Image();
			fish.src = fishSrc;

			fish.style.position = 'absolute';
			fish.style.zIndex = '10';
			fish.style.left = (x+50*i) + 'px';
			fish.style.top = y + 'px';
			document.body.appendChild(fish);
			setTimeout(()=>{fish.remove();},1500);
			fish.onclick = function(){
				let nowX = parseInt(this.style.left)
				fishRunR(fishSrc, nowX, y);
			}
		}, i*500)
	};
}

function fishL(){
	let fishSrc = fishList[Math.floor(Math.random()*fishList.length)];
	let x = Math.random()*(window.innerWidth-500);
	let y = Math.random()*(window.innerHeight-500);

	for(let i=0; i<5; i++){
		setTimeout(()=>{
			const fish = new Image();
			fish.src = fishSrc;
			fish.style.transform = 'scaleX(-1)';

			fish.style.position = 'absolute';
			fish.style.zIndex = '10';
			fish.style.left = (x-50*i) + 'px';
			fish.style.top = y + 'px';
			document.body.appendChild(fish);
			setTimeout(()=>{fish.remove();},1500);
			fish.onclick = function(){
				let nowX = parseInt(this.style.left)
				fishRunL(fishSrc, nowX, y);
			}
		}, i*500)
	};
}

function fishRunR(Src, x, y){
	
	for(let i=0; i<10; i++){
		setTimeout(()=>{
			const fish = new Image();
			fish.src = Src;

			fish.style.left = (x+60*i) + 'px';
			fish.style.top = y+'px';
			document.body.appendChild(fish);
			setTimeout(()=>{fish.remove();},1500);
	
		}, i*100);
	}
}

function fishRunL(Src, x, y){
	
	for(let i=0; i<10; i++){
		setTimeout(()=>{
			const fish = new Image();
			fish.src = Src;
			fish.style.transform = 'scaleX(-1)';

			fish.style.left = (x-60*i) + 'px';
			fish.style.top = y+'px';
			document.body.appendChild(fish);
			setTimeout(()=>{fish.remove();},1500);
	
		}, i*100);
	}
}


var fishRLoop = setInterval(fishR, 5000);
var fishRLoop = setInterval(fishR, 5000);
var fishRLoop = setInterval(fishR, 5000);
var fishRLoop = setInterval(fishR, 5000);

var fishLLoop = setInterval(fishL, 5000);
var fishLLoop = setInterval(fishL, 5000);
var fishLLoop = setInterval(fishL, 5000);