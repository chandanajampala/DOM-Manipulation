function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
     console.log(document.getElementsByClassName("class1"));
    
}

function identifyByTag() {
   console.log(document.getElementsByTagName("p"));
    
}

function changeBackground() {
    document.getElementById("block1").style.backgroundColor = "blue";
    
}

function increaseFont() {
    document.getElementById("block2").style.fontSize = "30px";
    
}

function changeFontColor() {
    
        document.getElementById("block3").style.color = "green";
   
    
    
}

function revertColor() {
    document.getElementById("block3").style.color = "black";
    
}

function hide() {
    document.getElementById("block4").style.visibility = "hidden";
    
}

function changeBackColorForAllBox() {
 document.getElementsByClassName("box1")[0].style.backgroundColor ="green";
 document.getElementsByClassName("box1")[1].style.backgroundColor ="green";
 document.getElementsByClassName("box1")[2].style.backgroundColor ="green";
 
}


function changeBackColor(col,cls){
document.getElementsByClassName(cls)[0].style.backgroundColor =col;
document.getElementsByClassName(cls)[1].style.backgroundColor =col;
document.getElementsByClassName(cls)[2].style.backgroundColor =col;
}

function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}


function addAdjacent() {
    var node = document.createElement("P");
    var textnode = document.createTextNode("I got generated on the fly...");
        node.appendChild(textnode);
    document.getElementById("para2").appendChild(node);
}


function removePara() {

}

function animatePara() {

}