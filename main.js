let userName;
const message = document.getElementById("text-here");

const myButton = document.getElementById("big-button");

myButton.addEventListener("click", function () {
    userName = prompt("Hi, what's your name? ");

    if (userName === "Bob") {
       message.innerHTML = `Hey, ${userName}, welcome back!`;
    } else {
        message.innerHTML = `Cool, welcome, ${userName}! I like meeting new people!`;
    };
})