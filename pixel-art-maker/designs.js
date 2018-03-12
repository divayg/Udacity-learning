// Select color input
const color=document.querySelector("#colorPicker");
//Select other elements
const sizePicker=document.querySelector("#sizePicker");
const canvas=document.querySelector("#pixelCanvas");
let colorValue="#000000";
// Select size input
const inputHeight=document.querySelector('#inputHeight');
const inputWidth=document.querySelector('#inputWidth');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit",makeGrid);

function makeGrid(e) {
    e.preventDefault();
    canvas.innerHTML="";
let gridHeight=inputHeight.value;
let gridWidth=inputWidth.value;
    for(var i=0;i<gridHeight;i++){
        let tr = document.createElement('tr');
        for(var j=0;j<gridWidth;j++){
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        canvas.appendChild(tr);
    }
}
//On color change
color.addEventListener("change",function(){
    colorValue=this.value;
    //console.log(colorValue);
});
//Adding background color to cells
canvas.addEventListener("click",function(e){
    e.target.style.background=colorValue;
});