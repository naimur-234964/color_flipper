const body = document.getElementsByTagName("body")[0];
const selectedText = document.getElementsByClassName("sl")[0];

function setColor(color){
    body.style.backgroundColor = color;
    selectedText.textContent = "You Selected Color: " + color.charAt(0).toUpperCase() + color.slice(1);
}


function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    
    const color = `rgb(${red}, ${green}, ${blue})`;
    
    body.style.backgroundColor = color;
    selectedText.textContent = "You Selected Color: Random";
}