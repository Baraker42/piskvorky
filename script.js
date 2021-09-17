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
    //columnSituation()
    //vyhodnocení sloupce
    var columnSituation =function(){
        var victor=0
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
        }

    //vyhodnocení řádku
    var rowSituation =function(){
        var victor=0
        for (var i = 1; i < 5; i++){
            var a = document.activeElement.id;
            rowPlus=i*10
            a=parseInt(a)
            isSymbol = document.getElementById(a+rowPlus).innerHTML;
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
            rowMinus = i*-10
            isSymbol = document.getElementById(rowMinus).innerHTML;
            if (isSymbol.includes(testsymbol)){
                victor++
            }
            else{
                break
            }
        }
        }

        //vyhodnocení šikmé
    var diagonalSituation =function(){
        var victor=0
        for (var i = 1; i < 5; i++){
            var a = document.activeElement.id;
            a=parseInt(a)
            diagonal =(i*10)+i
            isSymbol = document.getElementById(diagoval).innerHTML;
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
            diagonalMinus =(i-10)-i
            isSymbol = document.getElementById(a-i).innerHTML;
            if (isSymbol.includes(testsymbol)){
                victor++
            }
            else{
                break
            }
        }
        }
//rowSituation()

//diagonalSituation()





winnerFunction = function(){
    if (victor==4){
        if (testsymbol=="circle.svg"){
            winner = "kolečko"
        }
        else{
            winner = "křížek"
        }

        setTimeout(function(){ alert("vyhrává "+winner); }, 100);
    }


}
}
var elements = document.getElementsByClassName("sandbox");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', symbolFunction, false);
}