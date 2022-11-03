score = 0;
scoreCont = document.querySelector('.scoreCont');
// gameover = document.querySelector('.gameover');
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('go.wav');
setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function(e){
    console.log("key code is: ",e.keyCode);
    if(e.keyCode==38){
        dino= document.querySelector('.dino'); 
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if (e.keyCode==39) {
        dino= document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + "px";
    }
    if (e.keyCode==37) {
        dino= document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }

}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    btn=document.querySelector('.btn');
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')) ;
    dy = parseInt( window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox = parseInt( window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt( window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX = Math.abs(dx-ox);
    console.log(offsetX);
    offsetY = Math.abs(dy-oy);
     console.log(offsetY);
    if (offsetX< 73 && offsetY< 52) {
        gameover.innerHTML = "Game Over - Refresh to Play Again";
        
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX< 145 && cross){
        score = score + 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 100);
        aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.5;
        obstacle.style.animationduration = newDur + 's';
    }
}, 10);
  
function updateScore(sc) {
    scoreCont.innerHTML = "Your Score is: " + sc;
}

function Refresh() {
    location.reload();
}