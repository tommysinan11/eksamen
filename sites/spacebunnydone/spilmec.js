

window.addEventListener("load" , showTitle);

let point;
let liv;
const stbg = document.querySelector("#startmus")
stbg.volume=0.2;
const go = document.querySelector("#gameovermus")
function showTitle() {
    
    stbg.currentTime = 0;
    stbg.play();
    console.log("showTitle");
    go.pause();
    go.currentTime = 0;
    lev.pause();
  
    
    hideAllScreens();
    
  
    
    document.querySelector("#start").classList.remove("hide");
  
    
    document.querySelector("#play").addEventListener("click", startGame);
  }
  console.log("start");





  const igbm = document.querySelector("#ingamemus")
  igbm.volume=0.2;
function startGame() {
    point = 0;
    liv = 3;
    stbg.pause()
    igbm.currentTime = 0;
    igbm.play();
    go.pause();
    lev.pause();
    
    document.querySelector("#minepoint").textContent = point;
    
    document.querySelector("#heart1").classList.remove("gray");
    document.querySelector("#heart2").classList.remove("gray");
    document.querySelector("#heart3").classList.remove("gray");

    
    
    hideAllScreens();
    document.querySelector("#time_sprite").classList.add("shrink");
    
    document.querySelector("#time_sprite").addEventListener("animationend", levelcomplete);
    
    document.querySelector("#evilbunny_container").classList.add("hop");
    document.querySelector("#sweetbunny_container").classList.add("hop");
    let ran = rngnumber()
    document.querySelector("#evilbunny_container").classList.add("pos"+ ran)
    
    document.querySelector("#sweetbunny_container").classList.add("pos"+ ran)
    
    document.querySelector("#evilbunny_container").addEventListener("mousedown", clickevilbunny);
    
    
    
    document.querySelector("#evilbunny_container").addEventListener("animationiteration", resetevilbunny);
    document.querySelector("#evilbunny_container").addEventListener("animationiteration", resetsweetbunny);

}

const hitevilbunny = document.querySelector("#hitevilbunny1")
const hitsweetbunny = document.querySelector("#hitsweetbunny1")
function clickevilbunny(){
    hitevilbunny.currentTime = 0;
    hitevilbunny.play();
    pew.play();
    pew.currentTime = 0;

    document.querySelector("#evilbunny_container").removeEventListener("mosuedown", clickevilbunny);
    point = point + 100;
    document.querySelector("#minepoint").textContent = point;
    document.querySelector("#evilbunny_container").classList.add("frys");
    document.querySelector("#evilbunny_spirit").classList.add("forsvind");
    document.querySelector("#evilbunny_container").addEventListener("animationend", resetevilbunny);
}

function resetevilbunny() {
    document.querySelector("#evilbunny_container").classList.remove("hop");
    document.querySelector("#evilbunny_container").classList.remove("frys");
    document.querySelector("#evilbunny_spirit").classList.remove("forsvind");
    let ran = rngnumber()
    document.querySelector("#evilbunny_container").classList.remove("pos0");
    document.querySelector("#evilbunny_container").classList.remove("pos1");
    document.querySelector("#evilbunny_container").classList.remove("pos2");
    document.querySelector("#evilbunny_container").classList.remove("pos3");
    document.querySelector("#evilbunny_container").classList.remove("pos4");
    document.querySelector("#evilbunny_container").classList.remove("pos5");
    document.querySelector("#evilbunny_container").classList.remove("pos6");
    document.querySelector("#evilbunny_container").classList.remove("pos7");
    document.querySelector("#evilbunny_container").classList.remove("pos8");
    
    
    document.querySelector("#evilbunny_container").classList.add("hop");
    
    document.querySelector("#evilbunny_container").classList.add("pos"+ ran);
    document.querySelector("#evilbunny_container").addEventListener("mousedown" , clickevilbunny);
    document.querySelector("#evilbunny_container").addEventListener("animationiteration", resetevilbunny);


}
function resetsweetbunny() {
    document.querySelector("#sweetbunny_container").classList.remove("hop");
    document.querySelector("#sweetbunny_container").classList.remove("frys");
    document.querySelector("#sweetbunny_spirit").classList.remove("forsvind");
    let ran = rngnumber()
    document.querySelector("#sweetbunny_container").classList.remove("pos0");
    document.querySelector("#sweetbunny_container").classList.remove("pos1");
    document.querySelector("#sweetbunny_container").classList.remove("pos2");
    document.querySelector("#sweetbunny_container").classList.remove("pos3");
    document.querySelector("#sweetbunny_container").classList.remove("pos4");
    document.querySelector("#sweetbunny_container").classList.remove("pos5");
    document.querySelector("#sweetbunny_container").classList.remove("pos6");
    document.querySelector("#sweetbunny_container").classList.remove("pos7");
    document.querySelector("#sweetbunny_container").classList.remove("pos8");
    
    
    document.querySelector("#sweetbunny_container").classList.add("hop");
    
    document.querySelector("#sweetbunny_container").classList.add("pos"+ ran);
    document.querySelector("#sweetbunny_container").addEventListener("mousedown" , clicksweetbunny);
    document.querySelector("#sweetbunny_container").addEventListener("animationiteration", resetsweetbunny);


}
const pew = document.querySelector("#pow")
function clicksweetbunny(){
    console.log("looseLife");
    hitsweetbunny.currenttime = 0;
    hitsweetbunny.play();
    pew.play();
    pew.currenttime = 0;
    
    if (liv > 1) {
        document.querySelector("#heart" + liv).classList.add("gray");
        liv = liv - 1;
        console.log(liv);
      } else {
        document.querySelector("#heart" + liv).classList.add("gray");
        gameover();
      }
   
    console.log("clicksweetbunny");
    document.querySelector("#sweetbunny_container").removeEventListener("mosuedown", clicksweetbunny);
    document.querySelector("#sweetbunny_container").classList.add("frys");
    document.querySelector("#sweetbunny_spirit").classList.add("forsvind");
    document.querySelector("#sweetbunny_container").addEventListener("animationend", resetsweetbunny);
}
function rngnumber() {
return Math.floor(Math.random() * 9);
   
    
}







function hideAllScreens() {
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#game_over").classList.add("hide");
    document.querySelector("#level_complete").classList.add("hide");
}
function gameover() {
    console.log("gameOver");
    igbm.pause();
    igbm.currenttime = 0;
    go.play();
    go.currentTime = 0;

    
  
    
    hideAllScreens();
  
    
    document.querySelector("#game_over").classList.remove("hide");
  
    
    document.querySelector("#playagain").addEventListener("click", startGame);
    document.querySelector("#menubtn").addEventListener("click", showTitle)
    document.querySelector("#time_sprite").classList.remove("shrink");
    
    document.querySelector("#time_sprite").removeEventListener("animationend", levelcomplete);
  }

const lev =document.querySelector("#levelcompletemus")
  function levelcomplete(){
    hideAllScreens();
    igbm.pause();
    lev.play();
    lev.currentTime = 0;
  
    document.querySelector("#yourscore").textContent = point;
    document.querySelector("#level_complete").classList.remove("hide");
    document.querySelector("#playagain1").addEventListener("click", startGame);
    document.querySelector("#menubtn1").addEventListener("click", showTitle)
    document.querySelector("#time_sprite").classList.remove("shrink");
    
    document.querySelector("#time_sprite").removeEventListener("animationend", levelcomplete);
  }
  


    




