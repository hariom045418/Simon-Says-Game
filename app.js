let gameSeq = []
let userseq = []

let btns = ["yellow", "green", "red", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2")
document.addEventListener("keypress", function () {

    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameflash")
    setTimeout(() => {
        btn.classList.remove("gameflash")
    }, 250)
};
function userFlash(btn){
    btn.classList.add("userflash")
setTimeout(function(){
    btn.classList.remove("userflash")
},250)
};

function levelUp() {
    userseq=[];
    level++;
    h2.innerText = `level ${level}`
    let ranIdx = Math.floor(Math.random() * 3 + 1);
    let ranCol = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranCol}`)
    gameSeq.push(ranCol);
    console.log(gameSeq);
    gameFlash(ranbtn);
}

function checkAns(idx){

    if(userseq[idx]==gameSeq[idx]){
        if(userseq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document .querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
    reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(bt of allBtns){
    bt.addEventListener("click",btnPress)
}
function reset(){

    level=0;
    gameSeq=[]
    userseq=[]
    started=false;
}
