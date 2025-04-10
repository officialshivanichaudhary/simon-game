let gameseq=[];
let userseq=[];

let buttoncolors=["red","blue","green","yellow"];

let level=0;
let started=false;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false){
        console.log("Game started");
        started=true;
        levelup();
    }  
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText='Level '+level;
    //random button choose

    let randomidx=Math.floor(Math.random()*4);
    let randomcolor=buttoncolors[randomidx];
    let randombtn=document.querySelector("."+randomcolor);
    //console.log(randomidx);
    //console.log(randomcolor);
    //console.log(gameflash);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randombtn);
}

function checkans(idx){
    console.log("current level: "+level);

    if(userseq[idx] === gameseq[idx]){
        if (userseq.length === gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML="Game Over, Your score was <b>" +level +" </b> <br>Press Any Key to Restart";
       // console.log("wrong value");

       document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
       resetgame();
    }
}
function btnpress(){
   // console.log(this);
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
   // console.log(usercolor);
    userseq.push(usercolor);
   // console.log(userseq);
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
    
}

function resetgame(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
