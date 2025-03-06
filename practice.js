let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let msg = document.querySelector("h2");
let turnO=true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerHTML='O';
            turnO=false;
        }
        else{
            box.innerHTML='X';
            turnO=true;
        }
        box.disabled = true;

        checkWinner();
    });
});
let winner;
function display(){
    msg.classList.remove('hidden');
    msg.classList.add('show');
    msg.innerText=`game won by player ${winner}`;
    
    
}

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1===pos2 && pos2===pos3){
                winner=pos1;
                console.log('winner');
                display();
                
            } 
        }
    }

}

reset.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerText='';
        box.disabled=false;
        msg.classList.remove('show');
        msg.classList.add('hidden');
    })
})