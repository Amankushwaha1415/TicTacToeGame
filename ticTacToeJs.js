let boxes=document.querySelectorAll(".boxes");
// console.log(boxes)
let resetBtn=document.querySelector(".reset-btn");
let msg=document.querySelector(".message")
// console.log(resetBtn.innerText)
let game=document.querySelector(".game");

let playerX=true;
let resetBtnOn=true;
let winnerConditionArr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerX){
            box.innerText="X";
            playerX=false;
            console.log(box.innerText)
        }
        else{
            box.innerText="O";
            playerX=true;
            console.log(box.innerText)
        }
        box.disabled=true;
        checkWinner();
    });
    
});

let checkWinner=()=>{
    for(let pos of winnerConditionArr){
        let pos1val=boxes[pos[0]].innerText;
        let pos2val=boxes[pos[1]].innerText;
        let pos3val=boxes[pos[2]].innerText;
        // console.log(pos1val,pos2val,pos3val);
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val)
                for(let box of boxes){
                    box.disabled=true;
                }
                winnerMessage(pos1val);
            }
        }
    }
    
}

function winnerMessage(pos1val){
    msg.style.display="flex"
    msg.innerText=`Winner is ${pos1val}`
    game.style.display="none";
    resetBtnOn=false;
    resetBtn.innerText="New Game"

}

resetBtn.addEventListener("click",()=>{
    if(resetBtnOn){
        for(let box of boxes){
            box.innerText="";
            box.disabled=false;
        }
    }
    else{
        for(let box of boxes){
            box.innerText="";
            box.disabled=false;
        }
        resetBtnOn=true;
        game.style.display="flex";
        msg.style.display="none";
        resetBtn.innerText="Reset";
    }


});
