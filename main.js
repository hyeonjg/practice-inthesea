const textIn = document.getElementById('textIn');
const yongWang = document.getElementById('yongWang');
const say = document.getElementById('say');
const yongWangList = ["아~ 안 들린다!", "안 보인다 안 보여", "소곤소곤", "스트레스야 없어져라!", "보글보글~"];
const blindBT = document.getElementById('blind');
let blindBTON = false;
const credit = document.getElementById('credit');
const Ctxt = document.getElementById('creditTXT');

		//keydown 으로 했을 때 오류 발생. keyup으로 수
		textIn.addEventListener('keyup', function(event){
			if(event.key === 'Enter'){
				textOut();
				yongWangSay();
			}
		})
		
		function textOut(){
			var userText = textIn.value;
			if (userText.trim() === "") return;

			console.log(userText);

			const newtxt = document.createElement('p');
			newtxt.className = 'waterText';
			const newtxtChild = document.createTextNode(userText);
			newtxt.appendChild(newtxtChild);
			
			//생성되지 않은 객체의 offsetWidth 측정불가. 화면외 생성 후 Y지정
			waterSound();
			document.body.appendChild(newtxt);
			randomX(newtxt);
			waveAni(newtxt);

			textIn.value = '';
			textIn.focus();
		}

		function waterSound(){
			var WS = document.getElementById("WS");
			WS.play();
		}

		function randomX(obj){
			var leftPx = Math.random()*
			(window.innerWidth - obj.offsetWidth);
			obj.style.left = Math.round(leftPx)+'px';
		}

		function randomY(obj){
			var topPx = Math.random()*
			(window.innerHeight - obj.offsetHeight);
			obj.style.top = Math.round(topPx)+'px';
		}


		function yongWangSay(){
			const newSay = document.createElement('h3');
			newSay.className = 'says';
			let nowSay = document.createTextNode(yongWangList[parseInt(Math.random()*yongWangList.length)]);
			say.appendChild(newSay);
			newSay.appendChild(nowSay);

			let sayRemove = setTimeout(function(){
				newSay.removeChild(nowSay);
			}, 10000);
		}

		let buttonGO;

		blindBT.onclick = function(){
			if(!blindBTON){
				blindBTON = true;
				button40();
				blindBT.style.backgroundColor = 'black';
				blindBT.style.color = 'white';
			}
			else{
				blindBTON = false;
				blindClear();
				blindBT.style.backgroundColor = 'white';
				blindBT.style.color = 'black';
			}
		};

		function button40(){
			if(!buttonGO){
				buttonGO = setInterval(yongWangSay, 100);
			}
			
		}

		function blindClear(){
			clearInterval(buttonGO);
			buttonGO = null;
		}

		credit.onclick = function(){
			showCredit();
		}

		function showCredit(){
			Ctxt.classList.add('showCredit');
			let Cremove = setTimeout(function(){
				Ctxt.className = '';
			}, 15000);
		}

		function waveAni(obj){
			var leftPx = Math.round(Math.random());
			var nowPx = parseInt(obj.style.left);
			var nowHeight = (obj.style.top);

			Ani(obj);

			function Ani(){
				nowPx += leftPx;
				obj.style.left = nowPx + 'px';
				var AniLoop = requestAnimationFrame(Ani);
			}
		}

		