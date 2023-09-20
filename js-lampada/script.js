document.getElementById("lampada-01").addEventListener("click", function () {
    var lampada = document.getElementById("lampada-01");
    if (lampada.src.match("lampada-on.jpg")) {
      lampada.src = "lampada.jpg";
    } else {
      lampada.src = "lampada-on.jpg";
    }
  });
  
  document.getElementById("lampada-02").addEventListener("mouseover", function () {
    var lampada = document.getElementById("lampada-02");
    lampada.src = "lampada-on.jpg";
  });
  
  document.getElementById("lampada-02").addEventListener("mouseout", function () {
    var lampada = document.getElementById("lampada-02");
    lampada.src = "lampada.jpg";
  });