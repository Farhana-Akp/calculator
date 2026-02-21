    let display=document.getElementById("display");

function appendvalue(value){
display.value +=value;
}


function cleardisplay(value){

    display.value="";
}

function clearlast(value){

    display.value=display.value.slice(0,-1);
}

function calculate(value)
{
       try{

       display.value=eval(display.value);
       }
       catch{
            display.value="Error";

       }
}