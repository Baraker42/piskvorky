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
//volá tvorbu mřížky
resetBoxes()

//vytvoří a zavolá symbol ozančující začínajícího hráče
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

    //vyhodnocení sloupce
    var columnSituation =function(){
        var victor=0
        try{
        for (var i = 1; i < 5; i++){
            var a = document.activeElement.id;
            a=parseInt(a)
            isSymbol = document.getElementById(a+i).innerHTML;

            var aParent = document.getElementById(a).parentElement
            var aColumn = aParent.parentElement
            var symbolParent = document.getElementById(a+i).parentElement
            var symbolColumn = symbolParent.parentElement
            var shallPass = aColumn == symbolColumn

            if (isSymbol.includes(testsymbol)&&shallPass){
                victor++
            }
            else{
                break
            }
        }
        }
        catch{}
        try{
        for (var i = 1; i < 5; i++){
            var a = document.activeElement.id;
            a=parseInt(a)
            isSymbol = document.getElementById(a-i).innerHTML;
            var symbolParent = document.getElementById(a-i).parentElement
            var symbolColumn = symbolParent.parentElement
            var shallPass = aColumn == symbolColumn
            if (isSymbol.includes(testsymbol)&&shallPass){
                victor++
            }
            else{
                break
            }
        }
        }
        catch{}
        if (victor >= 4){
            return true
        }
        else{
            return false
        }

        }

    //vyhodnocení řádku
    var rowSituation =function(){
        var victor=0
        try{
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
    }
    catch{}
        try{
        for (var i = 1; i < 5; i++){
            var a = document.activeElement.id;
            a=parseInt(a)
            rowMinus = i*-10
            isSymbol = document.getElementById(a+rowMinus).innerHTML;
            if (isSymbol.includes(testsymbol)){
                victor++
            }
            else{
                break
            }
        }
    }
    catch{}
        if (victor >= 4){
            return true
        }
        else{
            return false
        }
    }
        //vyhodnocení šikmé z leva

    var leftDiagonalSituation =function(){
        var victor=0
        try{
        for (var i = 1; i < 5; i++){
            var a = document.activeElement.id;
            a=parseInt(a)
            var diagonal =(i*10)+i
            isSymbol = document.getElementById(a+diagonal).innerHTML;

            var aParent = document.getElementById(a).parentElement
            var aColumn = aParent.parentElement
            console.log(aColumn)
            var symbolParent = document.getElementById(a+diagonal).parentElement
            console.log(symbolParent)
            var symbolDiagonal = symbolParent.parentElement
            console.log(symbolDiagonal)
            var shallPass = aColumn !== symbolDiagonal

            if (isSymbol.includes(testsymbol)&&shallPass){
                victor++
            }
            else{
                break
            }
        }
        }
        catch{}
        try{
        for (var i = 1; i < 5; i++){
            var a = document.activeElement.id;
            a=parseInt(a)
            diagonalMinus =(i*10)+i
            isSymbol = document.getElementById(a-diagonalMinus).innerHTML;

            var aParent = document.getElementById(a).parentElement
            var aColumn = aParent.parentElement
            var symbolParent = document.getElementById(a-diagonalMinus).parentElement
            var symbolDiagonal = symbolParent.parentElement
            var shallPass = aColumn !== symbolDiagonal

            if (isSymbol.includes(testsymbol)&&shallPass){
                victor++
            }
            else{
                break
            }
        }
        }
        catch{}
        if (victor >= 4){
            return true
        }
        else{
            return false
        }
        }



        var rightDiagonalSituation =function(){
            var victor=0
            try{
            for (var i = 1; i < 5; i++){
                var a = document.activeElement.id;
                a=parseInt(a)
                var diagonal =(i*10)-i
                isSymbol = document.getElementById(a+diagonal).innerHTML;

                var aParent = document.getElementById(a).parentElement
                var aColumn = aParent.parentElement
                var symbolParent = document.getElementById(a+diagonal).parentElement
                var symbolDiagonal = symbolParent.parentElement
                var shallPass = aColumn !== symbolDiagonal

                if (isSymbol.includes(testsymbol)&&shallPass){
                    victor++
                }
                else{
                    break
                }
            }
            }
            catch{}
            try{
            for (var i = 1; i < 5; i++){
                var a = document.activeElement.id;
                a=parseInt(a)
                diagonalMinus =(i*10)-i
                isSymbol = document.getElementById(a-diagonalMinus).innerHTML;

                var aParent = document.getElementById(a).parentElement
                var aColumn = aParent.parentElement
                var symbolParent = document.getElementById(a-diagonalMinus).parentElement
                var symbolDiagonal = symbolParent.parentElement
                var shallPass = aColumn !== symbolDiagonal

                if (isSymbol.includes(testsymbol)&&shallPass){
                    victor++
                }
                else{
                    break
                }
            }
            }
            catch{}
            if (victor >= 4){
                return true
            }
            else{
                return false
            }
            }




        var columnResult = columnSituation();
        var rowResult = rowSituation();
        var leftDiagonalResult = leftDiagonalSituation();
        var rightDiagonalResult = rightDiagonalSituation();

        if (columnResult||rowResult||leftDiagonalResult||rightDiagonalResult){
            if (testsymbol.includes("circle.svg")){
                winnerSymbol="kolečko"
            }
            else{
                winnerSymbol="křížek"
            }


            var confirmYesNo = function(){
                var confirmYes = confirm("Vyhrává "+winnerSymbol+" chcete hrát znovu?")
                if (confirmYes===true){
                    location.reload();
                }
            }
            setTimeout(confirmYesNo, 100);


        }
}






var elements = document.getElementsByClassName("sandbox");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', symbolFunction, false);
}