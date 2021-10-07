//Skript pro tvorbu hrací mřížky
const createBoxes = function () {
   var makeGrid = document.getElementById("container-sketch");
   var counter = 0;

    for (var i = 0; i < 10; i++) {
        var column = document.createElement("div");
        column.setAttribute("class",("playground-column"+i));
        makeGrid.appendChild(column);
        for (var j = 0; j < 10; j++) {
            var newCell=document.createElement("div");
            newCell.setAttribute("class","playground");
            var playButton = document.createElement("button");
            playButton.setAttribute("class","sandbox");
            playButton.classList.add(j);
            playButton.setAttribute("id",counter);
            column.appendChild(newCell);
            newCell.appendChild(playButton);
            counter ++;
        }}};
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
    var activeButton = document.activeElement;
    var checkIfFree = document.activeElement.innerHTML;

    if (checkIfFree == ""){
        symbol = document.createElement("img");
        symbol.setAttribute("class","active-symbol");
        symbol.setAttribute("src",activeSymbol);

        //funkce pro zapsání symbolu do hracího pole
        const symbolChanger = function(activeSymbol){
            symbol.setAttribute("class","input-symbol");
            activeButton.appendChild(symbol);
            currentSituation();
            if (activeSymbol == "cross.svg"){
                activeSymbol = "circle.svg";}
                else{
                    activeSymbol = "cross.svg";
                }
                currentPlayer.innerHTML ="<img class='active-symbol' src="+activeSymbol+">";
            return activeSymbol;
        }
        activeSymbol = symbolChanger(activeSymbol);
    }};

const currentSituation = function () {
    //try a chatch v této funkci ošetřují vyhodnocování pro buňky mimo hrací pole
    //vyhodnocení sloupce
    const columnSituation = function(){
        var victor = 0;
        var activeCell = parseInt(document.activeElement.id);
        var aParent = document.getElementById(activeCell).parentElement;
        var aColumn = aParent.parentElement;

        const columnVictor = function(num){
            columnStatus = 0;
            basicNum = num;
            for (var i = 1; i <5;i++){
                isSymbol = document.getElementById(activeCell+num).innerHTML;
                var symbolParent = document.getElementById(activeCell+num).parentElement;
                var symbolColumn = symbolParent.parentElement;
                var shallPass = aColumn == symbolColumn;
                num = num + basicNum;
            if (isSymbol.includes(activeSymbol)&&shallPass){
                columnStatus ++;
            }
            else{
                break;
            }}
            return columnStatus;
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
        };

    //vyhodnocení řádku
        const rowSituation=function(){
            var victor = 0;
            const rowVictor=function(num){
                rowStatus = 0;
                for (var i = 1; i < 5; i++){
                    var activeCell = parseInt(document.activeElement.id);
                    row = i*num;
                    isSymbol = document.getElementById(activeCell+row).innerHTML;
                    if (isSymbol.includes(activeSymbol)){
                        rowStatus++;
                    }
                    else{
                        break;
                    }}
                return rowStatus;
            }
            try{
                victor = rowVictor(10)
            }
            catch{}
            try{
                victor = victor + rowVictor(-10)
            }
            catch{}
            return victor >=4;
        }
        //vyhodnocení šikmé z leva

    const leftDiagonalSituation = function(){
        var victor = 0;
        const leftDiagonalVictory = function(num){
            leftDiagonalStatus = 0
            for (var i = 1; i < 5; i++){
                var activeCell = parseInt(document.activeElement.id);
                var diagonal =(i*num)
                isSymbol = document.getElementById(activeCell+diagonal).innerHTML;
                var aParent = document.getElementById(activeCell).parentElement;
                var aColumn = aParent.parentElement;
                var symbolParent = document.getElementById(activeCell+diagonal).parentElement;
                var symbolDiagonal = symbolParent.parentElement;
                var shallPass = aColumn !== symbolDiagonal;

                if (isSymbol.includes(activeSymbol)&&shallPass){
                    leftDiagonalStatus++;
                }
                else{
                    break;
                }}
            return leftDiagonalStatus;
        }
        try{
        victor = leftDiagonalVictory(11)
        }
        catch{}

        try{
        victor = victor+leftDiagonalVictory(-11)
        }
        catch{}
        return victor >= 4;
        }

        const rightDiagonalSituation = function(){
            var victor=0;
            const rightDiagonalVictor= function(num){
                rightDiagonalStatus = 0;
                for (var i = 1; i < 5; i++){
                    var activeCell = parseInt(document.activeElement.id);
                    var diagonal =(i*num);
                    isSymbol = document.getElementById(activeCell+diagonal).innerHTML;
                    var aParent = document.getElementById(activeCell).parentElement;
                    var aColumn = aParent.parentElement;
                    var symbolParent = document.getElementById(activeCell+diagonal).parentElement;
                    var symbolDiagonal = symbolParent.parentElement;
                    var shallPass = aColumn !== symbolDiagonal;

                    activeColumn = document.getElementById(activeCell);
                    activeColumnId = activeColumn.className;
                    activeColumnId = activeColumnId.split(" ");
                    activeColumnId = parseInt(activeColumnId[1]);

                    nextColumn = document.getElementById(activeCell+diagonal);
                    nextColumnId = nextColumn.className;
                    nextColumnId = nextColumnId.split(" ");
                    nextColumnId = parseInt(nextColumnId[1]);

                    correctColumn = activeColumnId-nextColumnId;

                    if (num == 9){
                        var isCorrect = correctColumn > 0;
                    }
                    else{
                        var isCorrect = correctColumn < 0;
                    }

                    if (isSymbol.includes(activeSymbol)&&shallPass&&isCorrect){
                        rightDiagonalStatus++;
                    }
                    else{
                        break;
                    }
                }
                return rightDiagonalStatus;
            }
            try{
                victor = rightDiagonalVictor(9);
            }
            catch{}

            try{
                victor = victor+rightDiagonalVictor(-9);
            }
            catch{}
            return victor >= 4;
            }

        var columnResult = columnSituation();
        var rowResult = rowSituation();
        var leftDiagonalResult = leftDiagonalSituation();
        var rightDiagonalResult = rightDiagonalSituation();

        if (columnResult||rowResult||rightDiagonalResult||leftDiagonalResult){
            if (activeSymbol.includes("circle.svg")){
                winner=first[0];
            }
            else{
                winner=first[1];
            }

            const confirmYesNo = function(){
                var confirmYes = confirm("Vyhrává "+winner+", chcete hrát znovu?")
                if (confirmYes === true){
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
document.cookie = "username=John Doe";
const getName = function(){
    const player =[];
    const newOrder =[];
    player.push(prompt("Vložte jméno prvního hráče","První"));
    player.push(prompt("Vložte jméno druhého hráče","Druhý"));
    document.cookie ="first="+player[0]
    document.cookie ="second="+player[1]
    firstOrder=(Math.floor(Math.random() * player.length));
    const randomElement = player[firstOrder];
    alert("Začíná "+ randomElement);
    newOrder[0] = player[firstOrder];
    player.splice(firstOrder,1);
    newOrder[1] = player[0];
    
    return newOrder;
}
setTimeout(() => {first=getName()}, 50);
