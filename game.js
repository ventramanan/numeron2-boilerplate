// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var random1=Math.ceil((Math.random())*100)
var random2=Math.ceil((Math.random())*100)
var number1=document.querySelector("#number1")
var number2=document.querySelector("#number2")



// Iteration 3: Creating variables required to make the game functional
var score = 0
var sym
var plus =document.getElementById("plus")
var minus=document.getElementById("minus")
var divide=document.getElementById("divide")
var modulus=document.getElementById("modulus")
var multi=document.getElementById("mul")

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var numberr3=document.querySelector('#number3')
var number3;

// Iteration 5: Creating a randomise function to make the game functional

 var m
 function randomise(){
    timer=21
    random1=Math.ceil((Math.random())*100)
    random2=Math.ceil((Math.random())*100)
    if(random1<random2){
        m=random1
        random1=random2
        random2=m
    }
    sym=Math.ceil((Math.random())*5)
    if(sym==1){
        number3=random1+random2
    }
    else if(sym==2){
        number3=random1-random2
    }
    else if(sym==3){
        number3 =random1*random2
    }
    else if(sym==4){
        number3=Math.ceil(random1/random2)
    }
    else if(sym==5){
        number3=random1%random2
    }
    else{
        randomise()
    }
    number1.innerHTML=random1
    number2.innerHTML=random2
    numberr3.innerHTML=number3
    console.log(random1+' '+random2+" "+number3+" "+sym)
 }
 randomise()


// Iteration 6: Making the Operators (button) functional

plus.addEventListener("click",()=>{
    if(random1+random2===number3){
        score++
        randomise()
        count()
    }
    else{
        window.location.href="gameover.html"
    } 
})
minus.addEventListener("click",()=>{
    if(random1-random2===number3){
        score++
        randomise()
        localStorage.setItem("score",score)
        count()
    }
    else{
        window.location.href="gameover.html"
    }
})
multi.addEventListener("click",()=>{
    if(random1*random2===number3){
        score++
        randomise()
        localStorage.setItem("score",score)
        count()
    }
    else{
        window.location.href="gameover.html"
    }
 
})
divide.addEventListener("click",()=>{
    if( Math.ceil(random1/random2)=== number3){
        score++
        randomise()
        localStorage.setItem("score",score)
        count()
    }
    else{
        window.location.href="gameover.html"
    }
   
})
modulus.addEventListener("click",()=>{
    if(random1%random2===number1){
        score++
        randomise()
        localStorage.setItem("score",score)
        count()
    }
    else{
        window.location.href="gameover.html"
    }
})
// Iteration 7: Making Timer functional
var timer=21
var timerdiv=document.getElementById("timer")
function count(){
    
    if (timer>0){
        timer--
        timerdiv.textContent=timer 
    }else{
        window.location.href="gameover.html"
    }
   
}
setInterval(count,1000)

