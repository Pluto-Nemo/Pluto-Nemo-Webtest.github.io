let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

let myImg = document.querySelector("img");

myImg.onclick = ()=>{
    let mySrc = myImg.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImg.setAttribute("src", "images/mosic.jpg");
    } else {
        myImg.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");

function setName() {
    let name = prompt("please input your name:");
    if (!name) {
        setName();
    } else {
        localStorage.setItem("name", name);
        myHeading.textContent = "Mozilla 酷毙了！" + name;
    }
}

if (!localStorage.getItem("name")) {
    setName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了！" + storedName;
}

myButton.onclick = function () {
    setName();
};