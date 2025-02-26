const choice = ["石头","剪刀","布"];
const playerdisplay = document.getElementById("player");
const computerdisplay = document.getElementById("computer");
const gameresult = document.getElementById("gameresult");
const playerscore = document.getElementById("playerscore");
const computerscore = document.getElementById("computerscore");
let playerScore = 0;
let computerScore = 0;
function gamechoice(playerchoice) {
     const computerchoice = choice[Math.floor(Math.random()*3)]
     let result = "";
     if (computerchoice === playerchoice) {
       result = "厉害呀！你与电脑打成了平手😉👍";
      }
      else{
        switch (playerchoice) {
          case "石头":
           result= (computerchoice === "剪刀")? "太厉害了吧！你赢了耶！😁👍" : "很遗憾你输了😫，不要气馁，再来一次吧！😂"
          break;
            case "剪刀":
             result= (computerchoice === "石头")
               ? "很遗憾你输了😫，不要气馁，再来一次吧！😂"
               : "太厉害了吧！你赢了耶！😁👍";
            break;
            case "布":
             result = computerchoice === "剪刀"
                 ? "很遗憾你输了😫，不要气馁，再来一次吧！😂"
                 : "太厉害了吧！你赢了耶！😁👍";
            break;
              }
      }
      playerdisplay.textContent = `玩家选择：${playerchoice}`;
      computerdisplay.textContent = `电脑选择：${computerchoice}`;
      gameresult.textContent = `${result}`;
      gameresult.classList.remove("redResult", "winColor");
      switch (result) {
        case "很遗憾你输了😫，不要气馁，再来一次吧！😂":
          gameresult.classList.add("redResult");
           computerScore += 2;
           computerscore.textContent = computerScore;
          break;
        case "太厉害了吧！你赢了耶！😁👍":
          gameresult.classList.add("winColor");
          playerScore +=2;
          playerscore.textContent = playerScore;
          break;
      }
}