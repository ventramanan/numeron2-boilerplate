// Iteration 8: Making scoreboard functional
var palybt=document.getElementById("play-again-button")
palybt.addEventListener("click",()=>{
    location.href="game.html"
})
var bo=document.getElementById("score-board")
let score =localStorage.getItem("score")
if(score===null){
    score=0

}
bo.innerHTML=score
localStorage.clear()
