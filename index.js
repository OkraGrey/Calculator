const allButtons = document.querySelectorAll(".btn-number")
console.log(allButtons)
const dotVal = document.getElementById("#dot");
let count=0
let str=""
allButtons.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        
        if(event.target.innerHTML=="="){
            str=eval(str)
            const inVal=document.querySelector("#upper-result");
            inVal.value=str
        }
        else if(event.target.innerHTML=="."){
            
        }
        else if(event.target.innerHTML=="C"){
            str=""
            const inVal=document.querySelector("#upper-result");
            inVal.value=str
        }
        else{
            str+=event.target.innerHTML;
            const inVal=document.querySelector("#upper-result");
            inVal.value=str
        }
        
    }
            )
        }   
    )

