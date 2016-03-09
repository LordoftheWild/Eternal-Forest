
window.onload = function () { 
 	var alpha = document.createElement('sup'), 
 		play = document.createElement('a'), 
 		header = document.getElementsByClassName('page-header')[0]; 
 	beta.innerHTML = 'ALPHA'; 
 	play.href = '#'; 
 	play.className = 'btn'; 
 	play.innerHTML = 'Play Game'; 
 	play.onclick = function () { 
 		eternal-forest(); 
 		return false; 
 	}; 
 	play.appendChild(alpha); 
 	header.appendChild(play); 
}; 
