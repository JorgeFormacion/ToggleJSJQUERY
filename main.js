$().ready(() => {
   $("#btn").click(function () {
      $("#texto1").toggleClass("red");
   });
});

var btn = document.querySelector("#btn1");
var text = document.querySelector("#texto2");
btn.onclick = function() {
   text.classList.toggle("azul");
};