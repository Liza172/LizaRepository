var timer = 10;
var score = 0;
var hitrn = 0;
function getNewHit()
{
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function increaseScore()
{
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble()
{
    var clutter =" ";
for(var i=0; i<=215;i++)
{
    let rn = Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`;

}
document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(){
var interval = setInterval(function() {
    if(timer>0)
    {
        timer --;
        document.querySelector('#timerval').textContent = timer;
        
    }
    else
    {
        clearInterval(interval);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over<br>Your Score ${score}</h1>`;
        document.querySelector("#hitval").textContent = 0;
        document.querySelector("#scoreval").textContent = 0;




    }
},1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clicknum = Number(dets.target.textContent);
    if(clicknum === hitrn)
    {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
runTimer();
makeBubble();
getNewHit();
// increaseScore();

