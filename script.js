function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    // menu.classList.toggle("open");
    // icon.classList.toggle("open");

    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
    console.log("tombol ini sudah di click");
}
 

function callLinkedIn() {
    location.href ="https://www.linkedin.com/in/m-habibie-rafi-676a211ba/";
}

function callgitHub() {
    location.href ="https://github.com/rafi-IT-tech";
}