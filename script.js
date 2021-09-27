//Skript pro tvorbu hrací mřížky
var createBoxes = function () {
   var sketch = document.getElementById("container-sketch");
   var counter = 0;
    for (var i = 0; i < 10; i++) {
        var column = document.createElement("div");
        column.setAttribute("class",("playground-column"+i));
        sketch.appendChild(column);
        for (var j = 0; j < 10; j++) {
            var cell=document.createElement("div");
            cell.setAttribute("class","playground");
            var playButton = document.createElement("button");
            playButton.setAttribute("class","sandbox");
            playButton.classList.add(j);
            playButton.setAttribute("id",counter);
            column.appendChild(cell);
            cell.appendChild(playButton);
            counter ++;
        }
    }
};
//volá tvorbu mřížky
createBoxes()

//vytvoří a zavolá symbol označující začínajícího hráče
var activeSymbol = "circle.svg";
var currentPlayer = document.getElementById("current-player");
symbol = document.createElement("img");
symbol.setAttribute("class","active-symbol");
symbol.setAttribute("src",activeSymbol)
currentPlayer.appendChild(symbol)



var symbolFunction = function(){
    var activeButton =document.activeElement.id;
    var checkIfFree = document.activeElement.innerHTML;
    if (checkIfFree == ""){
        var inputSymbol = document.getElementById(activeButton)
        symbol = document.createElement("img");
        symbol.setAttribute("class","active-symbol")
        symbol.setAttribute("src",activeSymbol)

        //funkce pro zapsání symbolu do hracího pole
        var symbolChanger = function(activeSymbol){
            symbol.setAttribute("class","input-symbol")
            inputSymbol.appendChild(symbol)
            currentSituation();
            if (activeSymbol == "cross.svg"){;
                activeSymbol = "circle.svg";}
                else{
                    activeSymbol = "cross.svg"
                }
                currentPlayer.innerHTML ="<img class='active-symbol' src="+activeSymbol+">"
            return activeSymbol
        }
        activeSymbol=symbolChanger(activeSymbol)
}
};


var currentSituation = function () {

    //vyhodnocení sloupce
    var columnSituation =function(){
        var victor=0
        var a = document.activeElement.id;
        a=parseInt(a)
        var aParent = document.getElementById(a).parentElement
        var aColumn = aParent.parentElement

        try{
        for (var i = 1; i < 5; i++){
            isSymbol = document.getElementById(a+i).innerHTML;
            var symbolParent = document.getElementById(a+i).parentElement
            var symbolColumn = symbolParent.parentElement
            var shallPass = aColumn == symbolColumn

            if (isSymbol.includes(activeSymbol)&&shallPass){
                victor++
            }
            else{
                break
            }
        }
        }
        catch{}
        try{
        for (var i = -1; i < 5; i--){
            isSymbol = document.getElementById(a+i).innerHTML;
            var symbolParent = document.getElementById(a-i).parentElement
            var symbolColumn = symbolParent.parentElement
            var shallPass = aColumn == symbolColumn
            if (isSymbol.includes(activeSymbol)&&shallPass){
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
            if (isSymbol.includes(activeSymbol)){
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
            rowMinus = i*-10
            a=parseInt(a)

            isSymbol = document.getElementById(a+rowMinus).innerHTML;
            if (isSymbol.includes(activeSymbol)){
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
            var diagonal =(i*11)
            isSymbol = document.getElementById(a+diagonal).innerHTML;

            var aParent = document.getElementById(a).parentElement
            var aColumn = aParent.parentElement
            var symbolParent = document.getElementById(a+diagonal).parentElement
            var symbolDiagonal = symbolParent.parentElement
            var shallPass = aColumn !== symbolDiagonal

            if (isSymbol.includes(activeSymbol)&&shallPass){
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
            diagonal =(i*11)

            isSymbol = document.getElementById(a-diagonal).innerHTML;

            var aParent = document.getElementById(a).parentElement
            var aColumn = aParent.parentElement
            var symbolParent = document.getElementById(a-diagonal).parentElement
            var symbolDiagonal = symbolParent.parentElement
            var shallPass = aColumn !== symbolDiagonal

            if (isSymbol.includes(activeSymbol)&&shallPass){
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
                rareNumber=document.getElementById(a)
                a=parseInt(a)
                getRareNumber=(rareNumber.className[8])
                getRareNumber=parseInt(getRareNumber)
                var diagonal =(i*10)-i
                isSymbol = document.getElementById(a+diagonal).innerHTML;
                var aParent = document.getElementById(a).parentElement
                var aColumn = aParent.parentElement
                var symbolParent = document.getElementById(a+diagonal).parentElement
                var symbolDiagonal = symbolParent.parentElement
                var shallPass = aColumn !== symbolDiagonal

                rareNumber=document.getElementById(a)
                getRareNumber=(rareNumber.className[8])
                getRareNumber=parseInt(getRareNumber)
                rareNumber2=document.getElementById(a+diagonal)
                getRareNumber2=(rareNumber2.className[8])
                getRareNumber2=parseInt(getRareNumber2)

                veryGood=getRareNumber-getRareNumber2

                var biggerBoat = veryGood > 0

                if (isSymbol.includes(activeSymbol)&&shallPass&&biggerBoat){
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

                rareNumber=document.getElementById(a)
                getRareNumber=(rareNumber.className[8])
                getRareNumber=parseInt(getRareNumber)
                rareNumber2=document.getElementById(a-diagonalMinus)
                getRareNumber2=(rareNumber2.className[8])
                getRareNumber2=parseInt(getRareNumber2)
                veryGood=getRareNumber-getRareNumber2
                var biggerBoat = veryGood >0


                if (isSymbol.includes(activeSymbol)&&shallPass&&biggerBoat){
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

        if (columnResult||rowResult||rightDiagonalResult||leftDiagonalResult){
            if (activeSymbol.includes("circle.svg")){
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