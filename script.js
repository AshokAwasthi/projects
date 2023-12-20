var random_num;
function randomhit(){
     random_num = Math.floor(Math.random()*10)
    document.querySelector("#hitnum").innerHTML = random_num
}

var counter = 60;
function timer(){
    let setint =  setInterval(function(){
        if(counter>0){
            counter--;
            document.querySelector("#timer").innerHTML = counter
        } else{
            clearInterval(setint)
            document.querySelector(".bubbles").innerHTML =`<h1>Game Over</h1>`
        }
        },1000)
        
}

let score = 0;
function addscore(){
    score+= 10;
    document.querySelector("#score").textContent =score; 
}

let bubval ="";
function addbubble(){
    for(let i =0;i<182;i++){
        let randnum = Math.floor(Math.random()*10)
        bubval= bubval + `<div class="bub"><p>${randnum}</p></div> `
        document.querySelector(".bubbles").innerHTML = bubval;

    }
}

function checkresult(){
    
    document.querySelector(".bubbles").addEventListener("click",
    function(ele){
        let randnum = Number(ele.target.textContent);
        // console.log(typeof randnum);
        if(randnum === random_num){
            addscore()
            bubval =""
            addbubble()
            randomhit();
        }
    }
    )
}

randomhit();
timer();
addbubble()
checkresult()
