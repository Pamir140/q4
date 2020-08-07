var button = document.querySelector("#btn");
var catname = document.getElementById("catname");
var species = document.querySelector("#species");
var favFoods = document.querySelector("#favFoods");
var age = document.querySelector("#age");

var showData = document.querySelector("#showData");

const jsonLink =
  "https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json";

button.onclick = function () {
  fetch(jsonLink)
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.cats.length; i++) {
        var div = document.createElement("div");
        var h1 = document.createElement("h1");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");

        h1.textContent = data.cats[i].name;
        p1.textContent = data.cats[i].species;
        p2.textContent = data.cats[i].favFoods;
        p3.textContent = data.cats[i].age;

        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        showData.appendChild(div);
      }
    });
};
