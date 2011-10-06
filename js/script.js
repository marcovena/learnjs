(function(){

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


}
)()
