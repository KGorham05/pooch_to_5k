$(function () {
  let time = 90;
  let myTimer;
  let round = 1;
  let currentAction = "Jog";
  console.log(currentAction);

  function clock() {
    $("#round").text(round)
    myTimer = setInterval(myClock, 1000);


    function myClock() {
      $("#timer").text(--time);
      if (time === 0) {
        clearInterval(myTimer);
        if (currentAction === "Jog") {
          time = 120;
          currentAction = "Walk";
          $("#action").text("Walk");
          clock();
        } else {
          round++;
          if (round === 7) {
            alert("You did it!")
            return;
          }
          time = 90;
          currentAction = "Jog";
          $("#action").text("Jog");
          clock();
        }
      }
    }
  
  }

  $("#start").click(function() {
    $("#start").unbind("click");
    $("#start").hide();
    clock();
  });

});
