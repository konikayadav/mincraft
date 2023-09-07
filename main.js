canvas = new fabric.Canvas("myCanvas");
w = 30;
h = 30;
function showPlayer() {
    fabric.Image.fromURL("player.png", function(img){
        playerImg = img;
        playerImg.scaleToWidth(150);
        playerImg.scaleToHeight(150);
        playerImg.set({left:15, top:100});
        canvas.add(playerImg);
    });
    
}
function showBlock(blockName) {
    fabric.Image.fromURL(blockName, function(img) {
        blockImg = img;
        blockImg.scaleToWidth(w);
        blockImg.scaleToHeight(h);
        blockImg.set({left:10, top:75});
        canvas.add(blockImg);
    })
}
window.addEventListener("keydown", myKeydown);
function myKeydown(E) {
keypressed = E.keyCode;
console.log(keypressed);
console.log(E);
if(keypressed == 67) {
    showBlock("cloud.jpg");
}
if(keypressed == 68) {
    showBlock("dark_green.png");
}
if(keypressed == 71) {
    showBlock("ground.png");
}
if(keypressed == 76) {
    showBlock("light_green.png");
}
if(keypressed == 82) {
    showBlock("roof.jpg");
}
if(keypressed == 84) {
    showBlock("trunk.jpg");
}
if(keypressed == 85) {
    showBlock("unique.png");
}
if(keypressed ==87) {
    showBlock("wall.jpg");
}
if(keypressed == 89) {
    showBlock("yellow_wall.png");
}
if(keypressed == 80 && E.shiftKey) {
w = w + 10;
h = h + 10;
document.getElementById("width").innerHTML = "current width : " + w;
document.getElementById("height").inerHTML = "current height : " + h;
}
if(keypressed == 77 && E.shiftKey) {
    w = w - 10;
    h = h - 10;
    document.getElementById("width").inerHTML = "current width : " + w;
    document.getElementById("height").innerHTML = "current height : " + h;
}
}