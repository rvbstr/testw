function pageGoCur(){
    var x = document.getElementById("home");
    x.style.display = "none";
    var y = document.getElementById("cur");
    y.style.display = "flex";
    y.style['flex-direction'] = "column";
}

function pageGoHome(){
    var x = document.getElementById("cur");
    x.style.display = "none";
    var y = document.getElementById("home");
    y.style.display = "flex";
    y.style['flex-direction'] = "column";
}