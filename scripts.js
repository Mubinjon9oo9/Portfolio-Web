var bg = "#fff"
function modeSwitch(){
    if (bg=="#fff"){
        document.documentElement.style.setProperty("--bg-color", "#000");
        document.documentElement.style.setProperty("--text-color", "#fff");
        bg = "#000"
    }else{
        document.documentElement.style.setProperty("--bg-color", "#fff");
        document.documentElement.style.setProperty("--text-color", "#000");
        bg = "#fff"
    }
}