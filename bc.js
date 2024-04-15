
let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg")
let turno=true;




const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turno=true;
    enabledBox();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turno==="true"){
        turno="fals"
        box.innerText="o"
        box.style.color="green"
    }else{
        turno="true"
        box.innerText="x"
    }
   box.disabled=true


cheakwiner();
}
    )

  }
  ) 
 const disabledBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }

 const enabledBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }

  const showwiner=(winner)=>{
    msg.innerText=`Congratulation,winner is = ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();
  }
  

 const cheakwiner =()=>{
 for(let pattern of winPatterns){
    let value1=boxes[pattern [0]].innerText;
    let value2=boxes[pattern [1]].innerText;
    let value3=boxes[pattern [2]].innerText;
    console.log(pattern[0] )
    if(value1 !="" && value2 != "" && value3 !=""){
        if(value1===value2&&value2===value3){
            console.log("wineer",value1)
            showwiner(value1)
        }
    }
 }
 } 
 newGameBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);
  
