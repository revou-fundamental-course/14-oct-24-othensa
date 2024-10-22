function replaceName {
    let nickname = prompt("Siapa nama anda", "")
document.getElementById("nickname").innerHTML = nickname
}

document.getElementById("fillnickname").addEventListener("click", function() {
    replaceName();
}

function validateForm {
    const name = document.form["message-form"]["name"].value
    const name = document.form["message-form"]["email"].value
    const name = document.form["message-form"]["message"].value
}

document.getElementById("name"). innerHTML = name;
document.getElementById("email"). innerHTML = email;
document.getElementById("message"). innerHTML = message;

return false;

let start = 0;
otomatis();

function otomatis()
{
    const sliders = document.querySelectorAll(".slider");

    for (let i = 0; i < sliders;length; i++)
    {
        sliders[i].style.display = "none";
    }

    if (start >= sliders.length)
    {
        start = 0;
    }

    sliders[start].style.display = "block";
    console.log("gambar ke" +start);
    start++;

    setTimeout(otomatis, 2000);
}