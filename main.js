var groot = document.querySelector("#groot");
var h1 = document.createElement("h1");
var input_1 = document.createElement("input");
var button_add = document.createElement("button");
var button_clear = document.createElement("button");
var list = document.createElement("ul");


groot.appendChild(h1);
h1.innerHTML="Shopping list";

groot.appendChild(input_1);
input_1.setAttribute("type", "text")
input_1.addEventListener("keypress", function(e){
	if( e.key === "Enter"){
		add_list_item();
	}
});


groot.appendChild(button_add);
button_add.innerHTML="add item";
button_add.addEventListener("click", add_list_item);


groot.appendChild(button_clear);
button_clear.innerHTML="clear all";
button_clear.addEventListener("click", clear_all);

groot.appendChild(list);



function add_list_item() {
	let entry = input_1.value;
	let list_item = document.createElement("li");
	list_item.innerText = entry;
	list.appendChild(list_item);
	list_item.classList.add("not_done");
	list_item.addEventListener("click",toggle);
	input_1.value=" ";
}

function clear_all(){
	let all_list = document.querySelectorAll("li");
	for (var i = 0; i < all_list.length; i++) {
		all_list[i].remove()
	}
} 

function toggle() {
	this.classList.toggle("done")
}