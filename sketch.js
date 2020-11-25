var ball;
var database;
var position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballpos = database.ref('Ball/Position').on("value",readdata,showerr);
}
function readdata(data){
   position=data.val();
   ball.x = position.x
   ball.y = position.y
}
function showerr(){
    console.log("ErrorFound")
}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-2,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(2,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-2);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+2);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('Ball/Position').set({
        'x':ball.x+x,
        'y':ball.y+y
    })
}
