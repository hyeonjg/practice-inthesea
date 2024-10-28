function bubble(){
	const bb = document.createElement('div');
	bb.className = 'bubble';
	document.body.appendChild(bb);
	randomX(bb);
	waveAni(bb);

	let bbRemove = setTimeout(function(){
		bb.remove();
	}, 10000);	
}

var bubbleLoop = setInterval(bubble, 2500);

let isMouseDown = false;

	window.onmousedown = function(obj){
		isMouseDown = true;
		bubbleMini(obj);
	};

	window.onmouseup = function(){
		isMouseDown = false;
	};

	window.onmousemove = function(obj){
		if(isMouseDown){
			bubbleMini(obj);
		}
	};

function bubbleMini(obj){
	const bb = document.createElement('div');
	bb.className = 'bubble-mini';
	document.body.appendChild(bb);
	bb.style.left=(obj.clientX-50)+'px';
	bb.style.top=(obj.clientY-50)+'px';

	let bbRemove = setTimeout(function(){
		bb.remove();
		}, 4000);
	}