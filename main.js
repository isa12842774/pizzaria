menuListArray = ["Pizza de abobrinha", "Pizza de couve", "pizza de tomate", "pizza de ovo", "pizza de calabresa", "pizza de quatro queijo", "pizza italiana", "pizza carioca", "pizza brasileira"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}
function addItem(){
    var htmldata;
    var imgtags='<img id="im1" src="pizzaImg.png"/>'
    var item=document.getElementById("addItem").value;
    menuListArray.sort();
    htmldata=""
    for(var i=0;i<menuListArray.lenght;i++){
        htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}
function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}