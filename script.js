const screen = document.getElementById('screen');
const button = document.getElementById('button');

button.addEventListener("click",(event) => { 
    let target = event.target;
    console.log(target);
    if (target.innerHTML === "C"){
        screen.value = "";
    } 
    else if(target.classList.contains("number")){
        screen.value += target.innerHTML;
    } 
    else if (target.classList.contains("operator")){
        let lastchar = screen.value [screen.value.length - 1];
        if(["+", "-", "*", "/"].includes(lastchar)){
            screen.value = screen.value.slice(0,-1) + target.innerHTML;
        }   
        else{
        screen.value += target.innerHTML;
        }
    }
    else if (target.innerHTML === "="){
        if (screen.value.length !== 0){
            try{
                screen.value = eval(screen.value)
            }
            catch (error){
                screen.value = "Syntax error";
            }
        }
        else{
            screen.value = "";
        }  
    }
});