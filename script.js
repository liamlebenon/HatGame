const startButton = document.getElementById('playButton');
const gameArea = document.getElementById('gameArea');
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '&';
const result = document.getElementById('result');

class Field {
  constructor(field) {
    this.field = field;
  }


  static generateField(height, width) {
    let newField = [];
    for(let i = 0; i < height; i++) {
      newField.push([]);
      for(let j = 0; j < width; j++) {
      newField[i].push(fieldCharacter);
      }
  }
  let numberOfHoles = (width * height) / 3;

  for(let k = 0; k < numberOfHoles; k++) {
    let randomX = Math.floor(Math.random() * width);
    let randomY = Math.floor(Math.random() * height);

    newField[randomX][randomY] = hole;
  }  
  newField[0][0] = pathCharacter;
  
  let hatX = Math.floor(Math.random() * width);
  let hatY = Math.floor(Math.random() * height);
  newField[hatX][hatY] = hat;
  return newField;
}
  print() {
    let newArray;
    for(let l = 0; l < 5; l++) {
        newArray = this.field.join('<br>');    
        return newArray;
    }

}
}
let size;
let myField;
function startGame() {
    size = prompt("How big do you want the field to be? (recommended max is 10)");
    myField = new Field(
    Field.generateField(size, size)
);
    currentField = myField.print();
    gameArea.innerHTML = currentField;

}
    let direction;
    let currentLocationX = 0;
    let currentLocationY = 0;
    let gameOver = false;


function moveRight() {
    if(!gameOver) {
    direction = 'r';
    if(currentLocationX > myField.field.length - 2) {
        gameOver = true;
        result.innerHTML = 'You lose! You went out of bounds';
    }
    if(direction === 'r') {
        if(myField.field[currentLocationY][currentLocationX + 1] === hole) {
            gameOver = true;
            result.innerHTML = "You fell into a hole.  You lose";
        } 
        else if (myField.field[currentLocationY][currentLocationX + 1] === hat) {
            gameOver = true;
            result.innerHTML = "Well done! You found your hat!"
        } else {
        currentLocationX++;
        myField.field[currentLocationY].splice(currentLocationX,1, pathCharacter);
        gameArea.innerHTML = myField.print();
        }
    }
    }
}

function moveDown() {
    if(!gameOver) {
    direction = 'd';
        if(myField.field[currentLocationY + 1][currentLocationX] === hole) {
            gameOver = true;
            result.innerHTML = "You fell into a hole.  You lose";
        } else if (myField.field[currentLocationY + 1][currentLocationX] === hat) {
            gameOver = true;
            result.innerHTML = "Well done! You found your hat!"
        } else {
        currentLocationY++;
        myField.field[currentLocationY].splice(currentLocationX,1, pathCharacter);
        gameArea.innerHTML = myField.print();
        }
    }
}

function moveLeft() {
    if(!gameOver) {
    if(myField.field[currentLocationY][currentLocationX] === myField.field[currentLocationY][0]) {
        result.innerHTML = "You went out of bounds. You lose";
        gameOver = true;
    }
    direction = 'l';
        if(myField.field[currentLocationY][currentLocationX - 1] === hole) {
            gameOver = true;
            result.innerHTML = "You fell into a hole.  You lose";
        } 
        else if (myField.field[currentLocationY][currentLocationX - 1] === hat) {
            gameOver = true;
            result.innerHTML = "Well done! You found your hat!"
        } else {
        currentLocationX--;
        myField.field[currentLocationY].splice(currentLocationX,1, pathCharacter);
        gameArea.innerHTML = myField.print();
        } 
    }
}

function moveUp() {
    if(!gameOver) {
    if(myField.field[currentLocationY][currentLocationX] === myField.field[0][currentLocationX]){
        result.innerHTML = "You went out of bounds.  You lose!";
        gameOver = true;
    }
    direction = 'u';

        if(myField.field[currentLocationY - 1][currentLocationX] === hole) {
            gameOver = true;
            result.innerHTML = "You fell into a hole.  You lose";
        } else if (myField.field[currentLocationY - 1][currentLocationX] === hat) {
            gameOver = true;
            result.innerHTML = "Well done! You found your hat!";
        } else {
        currentLocationY--;
        myField.field[currentLocationY].splice(currentLocationX,1, pathCharacter);
        gameArea.innerHTML = myField.print();
        } 
    }
}
        




/*
    
    if(currentLocationX > myField.field[0].length) {
        gameOver = true;
        console.log('You lose! You went out of bounds')
    }


        

        

        


        try{
    myField.field[currentLocationY].splice(currentLocationX,1, pathCharacter);
        } catch(e) {
        console.log('You lose! You moved out of bounds');
        gameOver = true;
        }

    /*


    while(!gameOver) {
    
    
*/

const up = document.getElementById('up');
const down = document.getElementById('down');
const left = document.getElementById('left');
const right = document.getElementById('right');


startButton.addEventListener('click', startGame);
right.addEventListener('click', moveRight);
down.addEventListener('click', moveDown);
left.addEventListener('click', moveLeft);
up.addEventListener('click', moveUp);