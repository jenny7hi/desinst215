var p_active = true;

function toggle() {
    p_active = !p_active;
    var p = document.getElementById("toggle-label-p");
    var r = document.getElementById("toggle-label-r");
    var pg = document.getElementById("perception");
    var rg = document.getElementById("reality");
    if (p_active) {
        r.style.color = "lightgray";
        p.style.color = "#00001f";
        pg.style.display = "block";
        rg.style.display = "none";
    } else {
        p.style.color = "lightgray";
        r.style.color = "#00001f";
        rg.style.display = "block";
        pg.style.display = "none";
    }
}
