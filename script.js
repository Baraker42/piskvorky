//Skript pro tvorbu hrací mřížky
var height =10;
var width = 10;
var resetBoxes = function () {
   var sketch = document.getElementById("container-sketch")
   var counter = 0;
    for (var i = 0; i < height; i++) {
        var column = document.createElement("div");
        column.setAttribute("class",("playground-column"+i))
        sketch.appendChild(column);
        for (var j = 0; j < width; j++) {
            var cell=document.createElement("div");
            cell.setAttribute("class","playground")
            var cudlik = document.createElement("button");
            cudlik.setAttribute("class","sandbox")
            cudlik.setAttribute("id",counter)
            column.appendChild(cell)
            cell.appendChild(cudlik)
            counter ++;
        }
    }
};
resetBoxes()

var testsymbol = "circle.svg";
var currentPlayer = document.getElementById("current-player");
symbol = document.createElement("img");
symbol.setAttribute("class","active-symbol");
symbol.setAttribute("src",testsymbol)
currentPlayer.appendChild(symbol)




var symbolFunction = function(){
    var turn = 0
    var activebutton =document.activeElement.id;
    var checkIfFree = document.activeElement.innerHTML;
    if (checkIfFree == ""){
    var inputSymbol = document.getElementById(activebutton)
    symbol = document.createElement("img");
    symbol.setAttribute("class","active-symbol")
    symbol.setAttribute("src",testsymbol)
    if (testsymbol == "circle.svg" && turn ==0){
        currentPlayer.innerHTML ="<img class='active-symbol' src='cross.svg'>"
        symbol.setAttribute("class","input-symbol")
        inputSymbol.appendChild(symbol)
        currentSituation();
        testsymbol = "cross.svg";
        turn= 1;
    }

    if (testsymbol == "cross.svg" && turn ==0){
        currentPlayer.innerHTML ="<img class='active-symbol' src='circle.svg'>"
        symbol.setAttribute("class","input-symbol")
        inputSymbol.appendChild(symbol)
        currentSituation();
        testsymbol ="circle.svg"
        turn=1
    }


}
};


var currentSituation = function () {
    victor=0
    for (var i = 1; i < 5; i++){
        var a = document.activeElement.id;
        a=parseInt(a)
        isSymbol = document.getElementById(a+i).innerHTML;
        if (isSymbol.includes(testsymbol)){
            victor++
        }
        else{
            break
        }
    }
    for (var i = 1; i < 5; i++){
        var a = document.activeElement.id;
        a=parseInt(a)
        isSymbol = document.getElementById(a-i).innerHTML;
        if (isSymbol.includes(testsymbol)){
            victor++
        }
        else{
            break
        }
    }

    if (victor==4){
        alert("vyhrává "+testsymbol)
    }


}

var elements = document.getElementsByClassName("sandbox");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', symbolFunction, false);
}