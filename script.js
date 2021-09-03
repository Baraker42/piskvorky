
var height =10;
var width = 10;
var resetBoxes = function () {
   var sketch = document.getElementById("container-sketch")
   console.log(sketch)
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            var cell=document.createElement("div");
            cell.setAttribute("class","playground")
            var cudlik = document.createElement("button");
            sketch.appendChild(cell)
            cell.appendChild(cudlik)

        }
    }
};

resetBoxes()
