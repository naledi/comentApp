var liNum = 0

function saveComent(){

	
	// var listItem = "listItem" + liNum++
	// console.log(listItem)
	//gets id"userName" and puts it in variable nam
	var nam = document.getElementById("userName").value
	//gets id="userComent" and puts it in variable com
	var com = document.getElementById("userComent").value

	var namText = document.createTextNode(nam)
	var brake = document.createElement("br")
	var comText = document.createTextNode(com)
	
	//makes li element and puts it in variable new li
	var newLi	= document.createElement("li") 
	newLi.setAttribute("id","listItem")
	newLi.appendChild(namText)
	newLi.appendChild(brake)
	newLi.appendChild(comText)
	
	//gets id="coments" and puts it in variable dispNam
	var dispNam = document.getElementById("coments")
	//appends li element in newLi to id="commets" in dispNam
	dispNam.appendChild(newLi)

	// creates button element
	var deleteButton = document.createElement("button")
	var deleteText = document.createTextNode("Delete")

	//gives deleteButton element attribute of type button
	deleteButton.setAttribute("type", "button")

	//gives deleteButton id atribute db
	deleteButton.setAttribute("id", "db")

	//give deletButton onClick atribute toogle
	deleteButton.setAttribute("onClick", "del()")

	//appends deleteText to deleteBtton
	deleteButton.appendChild(deleteText)

	//appends deleteButton id="comments"
	newLi.appendChild(deleteButton)
	console.log(newLi)

}

//this fuction deletes listItem that contains delete button
function del(){
	//saves the ul that contains the li that contains the buton to variable parent
	var parent = document.getElementById("coments");
	//saves the li that contains the delet button to variable child
	var child = document.getElementById("listItem");
	//removes the chld from the parent
	parent.removeChild(child);
}