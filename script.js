function message() {
    alert("Ninja was liked!");
}


function login(element)  {
    console.log(element.innerText)
    if(element.innerText == "Login"){
        console.log("true")
        element.innerText = "Logout";

    }else{
        element.innerText = "Login";
    }
}

function hide(el) {
    el.remove();
}


