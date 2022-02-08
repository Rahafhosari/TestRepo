function login(element){
    element.innerText = "Logout"
}
function removeDefinition(element){
    element.remove()
}


// Another way to add a like in
// let numLikes = document.querySelector(".counter")
// let counter = 0
// function addLike(){
//     counter += 1
//     numLikes.innerText = counter
//     alert("Ninja was liked")
// }


function addLike(id){
    elem = document.getElementById(id)
    elem.innerText++
}


