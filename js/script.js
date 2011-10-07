(function(){
/*
var c = document.getElementById("content");
c.style.border = "1px solid red";

var items = new Array('Zoff','Burnich','Facch\u8888xxxetti');
var list = document.createElement("ul");
	
for (var i=0;i<items.lenght;i++)
{
	var li = document.createElement("li");
	li.innerText = items[i];
	list.appendChild("li");
	console.log(items[i]);
}
// added extra comments!!!!

*/

var b = new Ball(10, "red");
b.getDescription();
var box = {
    h: 20,
    w: 20,
    color: "#333",
    getDescription: function(){
        alert("This "+ this.color +" box is " + this.w + "x" + this.h); 
    }
}

box.getDescription();


}
)();

function Ball (radius,color) {
this.radius = radius;
this.color = color;

this.getDescription = function() {
alert("This ball is " + this.color + " and has a " + this.radius + " long radius.");
}


}


