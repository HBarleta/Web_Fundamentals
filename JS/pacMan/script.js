// list of features:
// have javascript display the world bricks, coins, etc.
// have pacman move up and down

var world = [

    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,2,2,2,1,1,1,1,3,2],
    [2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,1,2,1,1,2,2,1,2,2,1,1,2,1,2],
    [2,1,2,1,2,1,1,2,2,1,2,2,1,1,2,1,2],
    [2,1,2,3,2,1,1,1,1,3,1,1,1,1,2,1,2],
    [2,1,2,1,1,1,1,2,2,1,2,2,1,1,2,1,2],
    [2,1,2,2,2,1,1,2,2,1,2,2,1,1,1,3,2],
    [2,3,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2],
    [2,1,2,1,1,1,1,2,2,2,1,1,1,2,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,2,2,1,2],
    [2,1,2,1,2,2,2,2,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,2,2,2,2,2,2,1,2,2,2,1,2],
    [2,1,1,1,2,1,3,1,1,1,1,1,3,2,3,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    
];

var pacman = {
    x:1,
    y:1
};

var ghost = {
    x:15,
    y:15
};

var score = 0;
var lives = 3;

function displayWorld(){
    var output = "";
    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n"
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
                output +="<div class='brick'></div>";
             else if(world[i][j] == 1)
                output +="<div class='coin'></div>";
             else if(world[i][j] == 0)
                output +="<div class='empty'></div>";
            else if(world[i][j] == 3)
            output +="<div class='cherry'></div>";
            else if(world[i][j] == 4)
            output +="<div class='ghost'></div>";
            }
        output += "\n</div>"  
    }
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

function displayghost(){
    document.getElementById('ghost').style.top = ghost.y*20+"px";
    document.getElementById('ghost').style.left = ghost.x*20+"px";
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

function displayLives(){
    document.getElementById('lives').innerHTML = lives;
}
displayWorld();
displayPacman();
displayghost();


document.onkeydown = function(e){
    //move right
    if(e.keyCode === 39 && world[pacman.y][pacman.x+1] !== 2){
        document.getElementById('pacman').style.transform = "rotate(0deg)"
        pacman.x++;
    //move down
    } else if(e.keyCode === 40 && world[pacman.y+1][pacman.x] !== 2 ){
        document.getElementById('pacman').style.transform = "rotate(90deg)"
        pacman.y++;
    //move up
    } else if (e.keyCode === 38 && world[pacman.y-1][pacman.x] !== 2){
        document.getElementById('pacman').style.transform = "rotate(270deg)"
        pacman.y--;
    //move left
    } else if(e.keyCode === 37 && world[pacman.y][pacman.x-1] !== 2){
        document.getElementById('pacman').style.transform = "scaleX(-1)"
        pacman.x--;
    }
    // when pacman eats a coin
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayWorld();
        displayScore();
    } else if (world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score += 25;
        displayWorld();
        displayScore();
    } else if (world[pacman.y][pacman.x] == 4){
        world[pacman.y][pacman.x] = 0;
        score -= 10;
        lives -= 1;
        displayWorld();
        displayLives();
        displayScore();
    }
    displayPacman();
}