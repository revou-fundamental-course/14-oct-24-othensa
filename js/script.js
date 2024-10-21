function replaceName {
    let name = prompt("What's your name?", "")
    document.getElementById("name").innerHTML = name 
}

let changename = document.getElementById("changename")
changename.addEventListener("click", function() {
    replaceName();
})
