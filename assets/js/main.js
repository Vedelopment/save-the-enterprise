console.log("sanity check!");

var boardGrid = [
  [$('#num1')],
  [$('#num2')],
  [$('#num3')],
  [$('#num4')],
  [$('#num5')],
]

var dropInit = boardGrid[0][0]
var box;
var boxStatus = 0;
var timerDrop = 0;
var timerEmpty = 700;

function help(e) {
  result = e+1;
  return result;
  console.log('help is coming!');
}

function addRowNum(i) {
  console.log(dropInit);
  result = boardGrid[i+1][0];
  console.log(result);
}

function boxDrop() {
    $("#num1").css("background-color","rgb(250, 0, 0)");
    console.log("box drop");
}

function boxEmpty() {
    //myVar = setTimeout(
            //function boxEmpty() {
            $("#num1").css("background-color","rgb(0, 0, 0)");
            console.log("box empty");
            //}
          //, 700);
}

function boxLoop() {
      while (/*boxBelow==false || */boxStatus<5) {
          setTimeout(function(){
            boxDrop();
          }, timerDrop);
          setTimeout(function(){
            boxEmpty();
          }, timerEmpty);
            boxStatus ++;
            timerDrop = timerDrop + 1400;
            timerEmpty = timerEmpty + 1400;
      }
      //
      // delayStatus = function emptyBox({
      //   box = document.getElementById('#num1');
      //   box.style.backgroundColor = "rgb(0, 0, 0)";
      //   addRowNum();
      //   }, 700)
    }

$(document).on("ready", function() {


  start.addEventListener("click", boxLoop);


})

      ///////////////////////   BOX ONE   /////////////////////////////
      // function boxOneDrop() {
      //     myVar = setTimeout(
      //             function boxOneDrop() {
      //             $("#one").css("background-color","rgb(250, 0, 0)");
      //             console.log("box one drop");
      //             }
      //           , 700);
      //           }
      //
      // function boxOneEmpty() {
      //     myVar = setTimeout(
      //             function boxOneEmpty() {
      //             $("#one").css("background-color","rgb(0, 0, 0)");
      //             console.log("box one empty");
      //             }
      //           , 1400);
      //           }
      // ///////////////////////   BOX TWO   /////////////////////////////
      // function boxTwoDrop() {
      //     myVar = setTimeout(
      //           function boxTwoDrop() {
      //           $("#two").css("background-color","rgb(250, 0, 0)");
      //           console.log("box two drop");}
      //           , 1400);
      //           }
      //
      // function boxTwoEmpty() {
      //     myVar = setTimeout(
      //           function boxTwoEmpty() {
      //           $("#two").css("background-color","rgb(0, 0, 0)");
      //           console.log("box two empty");
      //           }
      //           , 2100);
      //           }
      // ///////////////////////   BOX THREE   /////////////////////////////
      // function boxThreeDrop() {
      //     myVar = setTimeout(
      //           function boxThreeDrop() {
      //           $("#three").css("background-color","rgb(250, 0, 0)");
      //           console.log("box three drop");}
      //           , 2100);
      //           }
      //
      // function boxThreeEmpty() {
      //     myVar = setTimeout(
      //           function boxThreeEmpty() {
      //           $("#three").css("background-color","rgb(0, 0, 0)");
      //           console.log("box three empty");
      //           }
      //           , 2800);
      //           }
      // ///////////////////////   BOX FOUR   /////////////////////////////
      // function boxFourDrop() {
      //     myVar = setTimeout(
      //           function boxFourDrop() {
      //           $("#four").css("background-color","rgb(250, 0, 0)");
      //           console.log("box four drop");
      //           }
      //           , 2800);
      //           }
      //
      // function boxFourEmpty() {
      //     myVar = setTimeout(
      //           function boxFourEmpty() {
      //           $("#four").css("background-color","rgb(0, 0, 0)");
      //           console.log("box four empty");
      //           }
      //           , 3500);
      //           }
      // // ///////////////////////   BOX FIVE   /////////////////////////////
      // function boxFiveDrop() {
      //     console.log('five if');
      //     myVar = setTimeout(
      //           function boxFiveDrop() {
      //           ///////////////////////////////////
      //           console.log("box five drop");
      //           $("#five").css("background-color","rgb(250, 0, 0)");
      //           //boxOneDrop();
      //           }
      //           ///////////////////////////////////
      //           , 3500);
      //       }
      /////////////////////////////////////////////////////////////////////

//////////////////////////////   TEST CODE   ////////////////////////////
// var fiveColor = $('#five').css('background-color');
// //console.log(fiveColor);
// if (fiveColor=='rgb(0, 0, 0)') {
