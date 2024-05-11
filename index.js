let container = document.getElementById("containerId")
let toggle = document.getElementById("switch");
let popupElement = document.getElementById("popupId");
let navigationEle = document.getElementById("navigation_menuId")

function on_off(){
    container.classList.toggle("light_mode");
    container.classList.toggle("dark_mode");
    toggle.classList.toggle("light_btn")
}

function login(){
    popupElement.classList.add("display")
}

function close_login_form(){
    popupElement.classList.remove("display")
}

function navgation_list(){
    navigationEle.classList.toggle("header_dropdown_container")
    navigationEle.classList.toggle("header_dropdown_remove")
}