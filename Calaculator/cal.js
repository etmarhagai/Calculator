
let stringOp=[]
const clear=document.getElementById("calc-clear")
const display= document.getElementById("calc-display-val");
const arrayClasses = Array.from(document.getElementsByClassName("calc-btn-num"));
const arrayOperator=Array.from(document.getElementsByClassName("calc-btn calc-btn-operator column"));
let clculatingFloat = 0;
let currentOperator ='+';
let boolean=false;
let flag=false
let count=0
let count2=0
let number=0
let boo=""
let boo2=""
arrayClasses.forEach((num, index) => {
    if(index<9){
        num.innerText = index+1;
    }
    else{
        num.innerText=0;
    }
    num.addEventListener('click',(e)=>{
        if(display.innerText==0)
        {
            display.innerText='';
        }
        display.innerText+=e.target.innerText;
        stringOp.push(e.target.innerText)
    });
 clear.addEventListener('click',(e)=>{
    location.reload()

 });

});

arrayOperator.forEach(ope =>{
    ope.addEventListener('click', (event) =>{
        if(display.innerHTML ==='0'){
            display.innerHTML = '';
        }
        if(event.target.innerText=='x'||flag==true) //cheak do number
        {
            flag=true
            count=count+1
        }
        if(event.target.innerHTML === '='){
            bonga(stringOp);
            display.innerHTML = clculatingFloat;
            return;
        }
        display.innerHTML += event.target.innerHTML //שיהיה מופיחע התוצאה ומה שההמשתמש לןחץ
        stringOp.push(event.target.innerHTML)
    })
})
function bonga(array) {
    const operators = ['+', '-', 'x', '/'];
    for(const char of array){
        if(operators.includes(char)){
            currentOperator = char  
            bobo2=boo  
            boolean=false;
        }else {
            if(boolean==false){
                 number =char
                 boolean=true
                 bobo=char
            }
            else if (boolean==true){
                  bobo = char.toString()+bobo.toString()
            }
            switch(currentOperator){ // אם המספר אחד מהקייסים האלה תפעיל את הפעולה הזאת 
                case '+':
                    clculatingFloat += number
                    break;
                
                case '-':
                    clculatingFloat -= number
                    boolean=false;
                    break;
                    
                
                case 'x' &&count<1:
                    clculatingFloat *= number
                    boolean=false;
                    
                    break;
                
                case '/':
                    clculatingFloat /= number
                    boolean=false;
                    break; 
                case (count>1):
                    clculatingFloat=boo*boo2
                    break;  
             }
        }
    }
}
