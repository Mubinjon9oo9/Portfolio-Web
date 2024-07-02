var bg = "#fff"
function modeSwitch(){
    if (bg=="#fff"){
        document.documentElement.style.setProperty("--bg-color", "#373737");
        document.documentElement.style.setProperty("--text-color", "#fff");
        bg = "#000"
    }else{
        document.documentElement.style.setProperty("--bg-color", "#fff");
        document.documentElement.style.setProperty("--text-color", "#000");
        bg = "#fff"
    }
}
function getUserColorScheme() {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("scroll").checked=true;
        modeSwitch();
      } 
    } 
  }
getUserColorScheme();