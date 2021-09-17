//Skript pro tvorbu hrací mřížky
var height =10;
var width = 10;
var resetBoxes = function () {
   var sketch = document.getElementById("container-sketch")
   var counter = 0;
    for (var i = 0; i < height; i++) {
        var column = document.createElement("div");
        column.setAttribute("class",("playground-column"+i))
        sketch.appendChild(column)
        counter ++;
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
console.log(currentPlayer)
currentPlayer.appendChild(symbol)




var symbolFunction = function(){
    var turn = 0
    var activebutton =document.activeElement.id;
    var testoslav = document.activeElement.innerHTML;
    if (testoslav == ""){
    var inputSymbol = document.getElementById(activebutton)
    symbol = document.createElement("img");
    symbol.setAttribute("src",testsymbol)
    if (testsymbol == "circle.svg" && turn ==0){
        testsymbol = "cross.svg";
        currentPlayer.innerHTML ="<img class='active-symbol' src='cross.svg'>"
        symbol.setAttribute("class","circle-symbol mmm")
        inputSymbol.appendChild(symbol)
        turn= 1;
    }

    if (testsymbol == "cross.svg" && turn ==0){
        testsymbol ="circle.svg"
        currentPlayer.innerHTML ="<img class='active-symbol' src='circle.svg'>"
        symbol.setAttribute("class","cross-symbol nnn")
        inputSymbol.appendChild(symbol)
        turn=1
    }

}
};

var elements = document.getElementsByClassName("sandbox");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', symbolFunction, false);
}