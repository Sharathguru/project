//selecting popup-over  popup-box and add-popup 

var popover=document.querySelector(".popup-over")
var popup=document.querySelector(".popup-box")
var addpopup = document.getElementById("add-popup")

addpopup.addEventListener("click", function() {
    
    popover.style.display="block"
    popup.style.display="block"
})


// selecting cancel button

var cancel=document.getElementById("CANCEL")

cancel.addEventListener("click",function(event){
     event.preventDefault()
     popover.style.display="none"
    popup.style.display="none"
})

//container,add-popup,book-title,book-title2,book-title3

var container1=document.querySelector(".container")
var addpop=document.getElementById("Add")
var booktitle=document.getElementById("book-title")
var booktitle2=document.getElementById("book-title2")
var booktitle3=document.getElementById("book-title3")

addpop.addEventListener("click",function(event){
    event.preventDefault()
    var div1=document.createElement("div")
        div1.setAttribute("class","book-container")
        div1.innerHTML=` <h2>${booktitle.value}</h2>
        <h5>${booktitle2.value}</h5>
            <p>${booktitle3.value}</p>
            <button onclick="Delete(Event)">Delete</button>`    
        container1.append(div1) 
        popover.style.display="none"
        popup.style.display="none"

            
})

function Delete(Event){
    event.target.parentElement.remove()
}

