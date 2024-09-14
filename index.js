let card = document.querySelector(".trend")
let card2 = document.getElementById("trendsec")
let mainpage = document.querySelector(".main")
let footer = document.querySelector(".footer")
let letterm = document.querySelector(".letter")
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");

let blogpage = document.querySelector(".blog1");

function shops() {
    mainpage.style.display = "none";
    blogpage.style.display = "none";
    footer.style.display = "none";
    about.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    letterm.style.display = "none"
    contact.style.display = "none"
}
function blogs() {
    mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    footer.style.display = "none";
    blogpage.style.display = "block";
    about.style.display = "none";
    letterm.style.display = "none"
    contact.style.display = "none"
}
function homes() {
    mainpage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blogpage.style.display = "block";
    about.style.display = "none";
    letterm.style.display = "none"
    contact.style.display = "none"

}
function abouts() {
    mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none"
    footer.style.display = "none"
    blogpage.style.display = "none";
    about.style.display = "block";
    letterm.style.display = "none"
    contact.style.display = "none"
}
function contacts(){
    mainpage.style.display = "none";
    blogpage.style.display = "none";
    footer.style.display = "none";
    about.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    letterm.style.display = "none"
    contact.style.display = "block"
}