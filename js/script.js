function replaceName {
    let nickname = prompt("Siapa nama anda", "")
document.getElementById("nickname").innerHTML = nickname
}

document.getElementById("fillnickname").addEventListener("click", function() {
    replaceName();
}