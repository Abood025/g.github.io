var getLocation = "https://www.google.com/search?q="


function search(getLocation){
    location = getLocation + encodeURIComponent(document.getElementById('textbox').value);
}


function games(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://abood025.github.io/games"
    }
    
    else {
        location = "https://abood025.github.io/games/" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function instagram(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://instagram.com/"
    }
    else if (txtBoxInput.substring(0, 2) == "r/") {
        location = "https://instagram.com/" + document.getElementById('textbox').value;
    }
    else {
        location = "https://instagram.com/" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function gmail(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://mail.google.com/mail/u/0/#inbox";
    }
    else {
        location = "https://mail.google.com/mail/u/0/#search/" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function twitter(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://twitter.com/";
    }
    else {
        location = "https://twitter.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function github(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://github.com/";
    }
    else {
        location = "https://github.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function startTime() {
    var today = new Date();
    var greeting;
    var amORpm = "AM";
    var h = today.getHours();
    if(h > 12){h = h - 12; amORpm="PM";}
    if(h == 0){h = 12;}
   

    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s + amORpm;
   
    var t = setTimeout(startTime, 500);

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
