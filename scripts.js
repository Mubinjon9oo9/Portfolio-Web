var bg = "#fff"
document.getElementById("scroll").addEventListener("change", function(){
    if (bg=="#fff"){
        document.documentElement.style.setProperty("--bg-color", "#000");
        document.documentElement.style.setProperty("--text-color", "#fff");
        bg = "#000"
    }else{
        document.documentElement.style.setProperty("--bg-color", "#fff");
        document.documentElement.style.setProperty("--text-color", "#000");
        bg = "#fff"
    }
})