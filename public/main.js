var clickedSquares1 = new Array()
var clickedSquares2 = new Array()
var winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
var player1 = true

function clicking(cellnumber){
  
    console.log("someone clicked on cell number " + cellnumber) 
    checkPlayer()
    if(player1 == true){
      document.getElementById("cell" + cellnumber).style.backgroundColor= "pink";
      clickedSquares1.push(cellnumber);
      checkWin(clickedSquares1)
    }
    else{
      document.getElementById("cell" + cellnumber).style.backgroundColor= "green";
      clickedSquares2.push(cellnumber);
      checkWin(clickedSquares2)
    }
}

//Checks if small array is contained in big array
function myChecker(bigArray, smallArray){
  return smallArray.every(num => bigArray.includes(num))
}

function checkWin(clickedSquares){ 
  for(winningCombo of winningCombos){ //looping through winning combos
    //winningCombo = [1,2,3] (example)
    var win = myChecker(clickedSquares, winningCombo) //check if clickedSquares contains winningCombo
    if(win == true){
      if(player1 == true){
        alert("Player 1 has won!!")
      }
      else{
        alert("Player 2 has won!!")
      }
      reset()
    }
  }
}

function reset(){ 
 var cellList = document.getElementsByClassName('cell')
 for(cell of cellList){
   cell.style.backgroundColor="white";
 }
 clickedSquares1 = new Array()
 clickedSquares2 = new Array()
}


function checkPlayer(){
  var playerList = document.getElementsByName('playerNum')
  var player1Element = playerList[0]

  if(player1Element.checked == true){
    player1 = true;
  }
  else{
    player1 = false;
  }
}





