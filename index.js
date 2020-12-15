function add(){
    const arr = document.querySelectorAll(".item-div");
    var element = document.createElement("div");
    element.appendChild(document.createTextNode('item-div ' + (arr.length+1)));
    let itemq = document.getElementById("main");
    element.setAttribute('class','item-div')
    itemq.appendChild(element);
}