//Skript pro tvorbu hrací mřížky
const createBoxes = function () {
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
symbol.setAttribute("src",activeSymbol);
currentPlayer.appendChild(symbol);

const symbolFunction = function(){
    var activeButton =document.activeElement.id;
    var checkIfFree = document.activeElement.innerHTML;

    if (checkIfFree == ""){
        var inputSymbol = document.getElementById(activeButton);
        symbol = document.createElement("img");
        symbol.setAttribute("class","active-symbol");
        symbol.setAttribute("src",activeSymbol);

        //funkce pro zapsání symbolu do hracího pole
        const symbolChanger = function(activeSymbol){
            symbol.setAttribute("class","input-symbol");
            inputSymbol.appendChild(symbol);
            currentSituation();
            if (activeSymbol == "cross.svg"){
                activeSymbol = "circle.svg";}
                else{
                    activeSymbol = "cross.svg";
                }
                currentPlayer.innerHTML ="<img class='active-symbol' src="+activeSymbol+">";
            return activeSymbol;
        }
        activeSymbol=symbolChanger(activeSymbol);
}
};

const currentSituation = function () {

    //vyhodnocení sloupce
    const columnSituation =function(){
        var victor=0;
        var a = document.activeElement.id;
        a=parseInt(a);
        var aParent = document.getElementById(a).parentElement;
        var aColumn = aParent.parentElement;

        const columnVictor= function(num){
            column=0;
            basicNum=num;
            for (var i = 1; i <5;i++){
                isSymbol = document.getElementById(a+num).innerHTML;
                var symbolParent = document.getElementById(a+num).parentElement;
                var symbolColumn = symbolParent.parentElement;
                var shallPass = aColumn == symbolColumn;
                num=num+basicNum;
            if (isSymbol.includes(activeSymbol)&&shallPass){
                column++;
            }
            else{
                break
            }
            }
            return column
        }
        try{
        victor = columnVictor(1);
        }
        catch{}
        try{
        victor = victor + (columnVictor(-1));
        }
        catch{}

        return victor >=4;
        }

    //vyhodnocení řádku
        const rowSituation=function(){
            var victor=0;
            const rowVictor=function(num){
            rowPlus=0
            for (var i = 1; i < 5; i++){
                var a = document.activeElement.id;
                row=i*num;
                a=parseInt(a);

                isSymbol = document.getElementById(a+row).innerHTML;
                console.log(isSymbol,activeSymbol);
                if (isSymbol.includes(activeSymbol)){
                    rowPlus++;
                }
                else{
                    break;
            }
            }
            return rowPlus;
            }
            try{
                victor=rowVictor(10)
            }
            catch{}
            try{
                victor=victor+rowVictor(-10)
            }
            catch{}
            return victor >=4;
        }
        //vyhodnocení šikmé z leva

    const leftDiagonalSituation =function(){
        var victor=0;

        try{
        for (var i = 1; i < 5; i++){
            var a = document.activeElement.id;
            a=parseInt(a);
            var diagonal =(i*11)
            isSymbol = document.getElementById(a+diagonal).innerHTML;

            var aParent = document.getElementById(a).parentElement;
            var aColumn = aParent.parentElement;
            var symbolParent = document.getElementById(a+diagonal).parentElement;
            var symbolDiagonal = symbolParent.parentElement;
            var shallPass = aColumn !== symbolDiagonal;

            if (isSymbol.includes(activeSymbol)&&shallPass){
                victor++;
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
            a=parseInt(a);
            diagonal =(i*11);

            isSymbol = document.getElementById(a-diagonal).innerHTML;

            var aParent = document.getElementById(a).parentElement;
            var aColumn = aParent.parentElement;
            var symbolParent = document.getElementById(a-diagonal).parentElement;
            var symbolDiagonal = symbolParent.parentElement;
            var shallPass = aColumn !== symbolDiagonal;

            if (isSymbol.includes(activeSymbol)&&shallPass){
                victor++;
            }
            else{
                break;
            }
        }
        }
        catch{}
        return victor >=4;
        }

        const rightDiagonalSituation =function(){
            var victor=0;
            try{

            for (var i = 1; i < 5; i++){
                var a = document.activeElement.id;
                rareNumber=document.getElementById(a);
                a=parseInt(a);
                getRareNumber=(rareNumber.className[8]);
                getRareNumber=parseInt(getRareNumber);
                var diagonal =(i*10)-i;
                isSymbol = document.getElementById(a+diagonal).innerHTML;
                var aParent = document.getElementById(a).parentElement;
                var aColumn = aParent.parentElement;
                var symbolParent = document.getElementById(a+diagonal).parentElement;
                var symbolDiagonal = symbolParent.parentElement;
                var shallPass = aColumn !== symbolDiagonal;

                rareNumber=document.getElementById(a);
                getRareNumber=(rareNumber.className[8]);
                getRareNumber=parseInt(getRareNumber);
                rareNumber2=document.getElementById(a+diagonal);
                getRareNumber2=(rareNumber2.className[8]);
                getRareNumber2=parseInt(getRareNumber2);

                veryGood=getRareNumber-getRareNumber2;

                var biggerBoat = veryGood > 0;

                if (isSymbol.includes(activeSymbol)&&shallPass&&biggerBoat){
                    victor++;
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
                a=parseInt(a);
                diagonalMinus =(i*10)-i;

                isSymbol = document.getElementById(a-diagonalMinus).innerHTML;
                var aParent = document.getElementById(a).parentElement;
                var aColumn = aParent.parentElement;
                var symbolParent = document.getElementById(a-diagonalMinus).parentElement;
                var symbolDiagonal = symbolParent.parentElement;
                var shallPass = aColumn !== symbolDiagonal;

                rareNumber=document.getElementById(a);
                getRareNumber=(rareNumber.className[8]);
                getRareNumber=parseInt(getRareNumber);
                rareNumber2=document.getElementById(a-diagonalMinus);
                getRareNumber2=(rareNumber2.className[8]);
                getRareNumber2=parseInt(getRareNumber2);
                veryGood=getRareNumber-getRareNumber2;
                var biggerBoat = veryGood <0;

                if (isSymbol.includes(activeSymbol)&&shallPass&& biggerBoat){
                    victor++;
                }
                else{
                    break
                }
            }
            }
            catch{}
            return victor >=4
            }

        var columnResult = columnSituation();
        var rowResult = rowSituation();
        var leftDiagonalResult = leftDiagonalSituation();
        var rightDiagonalResult = rightDiagonalSituation();

        if (columnResult||rowResult||rightDiagonalResult||leftDiagonalResult){
            if (activeSymbol.includes("circle.svg")){
                winnerSymbol=first[0]
            }
            else{
                winnerSymbol=first[1]
            }

            const confirmYesNo = function(){
                var confirmYes = confirm("Vyhrává "+winnerSymbol+", chcete hrát znovu?")
                if (confirmYes===true){
                    location.reload();
                }
            }
            setTimeout(confirmYesNo, 200);
        }
}

var elements = document.getElementsByClassName("sandbox");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', symbolFunction, false);
}

const getName = function(){
    const player =[];
    const newOrder =[];
    player.push(prompt("Vložte jméno prvního hráče","První"));
    player.push(prompt("Vložte jméno druhého hráče","Druhý"));
    firstOrder=(Math.floor(Math.random() * player.length))
    const randomElement = player[firstOrder];
    alert("Začíná "+ randomElement);
    newOrder[0]=player[firstOrder]
    player.splice(firstOrder,1)
    newOrder[1]=player[0]
    return newOrder
}
setTimeout(() => {first=getName()}, 50);
