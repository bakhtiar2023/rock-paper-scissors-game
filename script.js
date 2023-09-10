// Pilihan dari com dan player1
class Choices {
  constructor(playerChoice) {
    this.playerChoice = playerChoice;
    this.comChoice = this.pilihanAcakCom();
  }

  getplayerChoice = () => this.playerChoice;
  getcomChoice = () => this.comChoice;

  pilihanAcakCom() {
    const pilihan = ["rock", "paper", "scissor"];
    return pilihan[Math.floor(Math.random() * pilihan.length)];
  }
}

// Mengatur input,style, menampilkan hasil dan reset game
class Games {
  constructor() {
    this.pilihanBtnsPlayer = document.querySelectorAll(".btnGamesPlayer");
    this.pilihanBtnsPlayer.forEach((option) =>
      option.addEventListener("click", this.playGame.bind(this))
    );
    this.pilihanBtnsCom = document.querySelectorAll(".btnGamesCom");
    this.resetGame = document.getElementById("restart");
    this.resetGame.addEventListener("click", this.resetFunctions.bind(this));
    this.result = document.getElementById("hasil");
    this.originalText = this.result.innerHTML;
  }

  playGame(e) {
    this.choice = new Choices(e.target.dataset.option);

    const player1 = this.choice.getplayerChoice();

    if (player1 === "rock") {
      [...this.pilihanBtnsPlayer]
        .find((choice) => choice.dataset.option === player1)
        .classList.add("playerChoice", "playerChoiceStyle");
      [this.pilihanBtnsPlayer[1], this.pilihanBtnsPlayer[2]].forEach((choice) =>
        choice.classList.add("playerChoice")
      );
    } else if (player1 === "paper") {
      [...this.pilihanBtnsPlayer]
        .find((choice) => choice.dataset.option === player1)
        .classList.add("playerChoice", "playerChoiceStyle");
      [this.pilihanBtnsPlayer[0], this.pilihanBtnsPlayer[2]].forEach((choice) =>
        choice.classList.add("playerChoice")
      );
    } else if (player1 === "scissor") {
      [...this.pilihanBtnsPlayer]
        .find((choice) => choice.dataset.option === player1)
        .classList.add("playerChoice", "playerChoiceStyle");
      [this.pilihanBtnsPlayer[0], this.pilihanBtnsPlayer[1]].forEach((choice) =>
        choice.classList.add("playerChoice")
      );
    } else {
    }

    const com = this.choice.getcomChoice();

    if (com === "rock") {
      [...this.pilihanBtnsCom]
        .find((choice) => choice.dataset.option === com)
        .classList.add("computerChoice");
    } else if (com === "paper") {
      [...this.pilihanBtnsCom]
        .find((choice) => choice.dataset.option === com)
        .classList.add("computerChoice");
    } else if (com === "scissor") {
      [...this.pilihanBtnsCom]
        .find((choice) => choice.dataset.option === com)
        .classList.add("computerChoice");
    } else {
    }

    const sendProperty = new GameRules(player1, com);
    this.result.innerHTML = sendProperty.resultGame;
    this.result.classList.add("resultGame");
  }

  resetFunctions() {
    const playerChoices = this.pilihanBtnsPlayer;
    const comChoices = this.pilihanBtnsCom;

    [...playerChoices, ...comChoices].forEach((element) =>
      element.classList.remove(
        "playerChoice",
        "playerChoiceStyle",
        "computerChoice"
      )
    );

    this.result.classList.remove("resultGame");
    this.result.innerHTML = this.originalText;
  }
}

// Peraturan dalam permainan
class GameRules {
  constructor(player1, com) {
    this.player1 = player1;
    this.com = com;
    this.resultGame = this.memilihPemenang();
  }

  getResult = () => this.result.innerHTML;

  memilihPemenang() {
    if (this.player1 == this.com) {
      return "DRAW";
    } else if (this.player1 == "rock" && this.com == "scissor") {
      return "PLAYER 1 WIN";
    } else if (this.player1 == "paper" && this.com == "rock") {
      return "PLAYER 1 WIN";
    } else if (this.player1 == "scissor" && this.com == "paper") {
      return "PLAYER 1 WIN";
    } else {
      return "COM WIN";
    }
  }
}

// object untuk memanggil class Games
const newGames = new Games();