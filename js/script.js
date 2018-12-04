/* Neroda Sergey 2018 : Simple.psd */

/* JS-responsive menu */

menu.onclick = function myFunction () {
    var x = document.getElementById('myTopnav')
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}