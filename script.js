//Skript pro tvorbu hrací mřížky
var height =10;
var width = 10;
var resetBoxes = function () {
   var sketch = document.getElementById("container-sketch")
    for (var i = 0; i < height; i++) {
        var column = document.createElement("div");
        column.setAttribute("class",("playground-column"+i))
        console.log(i)
        sketch.appendChild(column)
        for (var j = 0; j < width; j++) {
            var cell=document.createElement("div");
            cell.setAttribute("class","playground")
            var cudlik = document.createElement("button");
            column.appendChild(cell)
            cell.appendChild(cudlik)

        }
    }
};
resetBoxes()
