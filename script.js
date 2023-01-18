score=0;
temp =true;
let audio=new Audio('MyHeartWillGoOn.mp3');
// setTimeout(function(){
//     audio.play();
// },100)
audio.play()
// var Container=document.getElementsByClassName('Container')[0];
//     Container.addEventListener('click',function(){
//          let titanic=document.getElementsByClassName('titanic')[0];
//     titanic.classList.add('animateTitanicUp');
//      setTimeout(function(){
//          titanic.classList.remove('animateTitanicUp');
//      },700)
//     console.log('hi')
//     })
    
document.onkeydown=function(e)
{
    console.log("Key code is: ",e.keyCode);
    if(e.keyCode==38||e.keyCode==32)
    {
        let titanic=document.getElementsByClassName('titanic')[0];
        titanic.classList.add('animateTitanicUp');
        setTimeout(function(){
            titanic.classList.remove('animateTitanicUp');
        },700)
    }
    if(e.keyCode==37)
    {
        let titanic=document.getElementsByClassName('titanic')[0];
        titanicx=parseInt(window.getComputedStyle(titanic,null).getPropertyValue('left'));
        titanic.style.left = titanicx - 50 + "px";
    }
    if(e.keyCode==39)
    {
        let titanic=document.getElementsByClassName('titanic')[0];
        titanicx=parseInt(window.getComputedStyle(titanic,null).getPropertyValue('left'));
        titanic.style.left = titanicx + 50 + "px";
    }
}

setInterval(function()
{
    let titanic=document.getElementsByClassName('titanic')[0];
    let gameOver=document.getElementsByClassName('gameOver')[0];
    let obstacle=document.getElementsByClassName('obstacle')[0];

    mx=parseInt(window.getComputedStyle(titanic,null).getPropertyValue('left'));
    my=parseInt(window.getComputedStyle(titanic,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    let offsetX=Math.abs(mx-ox);
    let offsetY=Math.abs(my-oy);

    console.log(offsetX,offsetY);
    if(offsetX<175 && offsetY<150)
    {
        gameOver.innerHTML='Game over,Refresh to play again';
        obstacle.classList.remove('obstacleAni');
        let scoreCont=document.getElementsByClassName('scoreCont')[0];
        scoreCont.innerHTML='Your score: '+(score);
    }
    else if(temp==true&&offsetX<300&&(offsetX>150&&offsetY>150))
    {
        score=score+1;
        updateScore(score);
        temp=false;
        setTimeout(function(){
            temp=true;
        },1000)
    }
    setTimeout(function(){
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.001;
        obstacle.style.animationDuration = newDur + 's';
        console.log('New animation duration: ', newDur)
    }, 1000);
},100)

function updateScore(score)
{
    let scoreCont2=document.getElementsByClassName('scoreCont')[0];
    scoreCont2.innerHTML='Your score: '+(score);
}