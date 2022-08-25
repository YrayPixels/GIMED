const toggle = document.querySelector(".navbar_toggle")
const links = document.querySelector(".main_nav")

toggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})