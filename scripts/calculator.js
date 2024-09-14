const display=document.getElementById("display")

function appendTO(input){
    display.value +=input
}
 function clearTO(){
    display.value=''
 }


function calculate(){
    try{
        display.value=eval(display.value)
    } catch (error){
     display.value="error"
    }
}