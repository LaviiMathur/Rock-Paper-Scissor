let result = document.querySelector("h2");
let cpuResult = document.querySelector(".computer img");
let cpuText = document.querySelector(" p").innerHTML;
OptionBtn = document.querySelectorAll(".user");
OptionBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.add("pressed");

    OptionBtn.forEach((button2, index2) => {
      index != index2 && button2.classList.remove("pressed");
      document.querySelector(".computer").classList.remove("hide");
    });
    let time = setTimeout(() => {
      document.querySelector(".computer").classList.add("hide");
    }, 5000);
    let randomNum = Math.floor(Math.random() * 3);

    let cpuImage = [
      "images/image1.png",
      "images/image2.png",
      "images/image3.png",
    ];

    cpuResult.src = cpuImage[randomNum];

    let cpuValue = ["R", "P", "S"][randomNum];
    let userValue = ["R", "P", "S"][index];

    let outCome = {
      RP: "USER Wins😁",
      RS: "CPU Wins😢",
      PR: "CPU Wins😢",
      PS: "USER Wins😁",
      SR: "USER Wins😁",
      SP: "CPU Wins😢",
      SS: "DRAW!!",
      RR: "DRAW!!",
      PP: "DRAW!!",
    };
    let outcomeValue = outCome[cpuValue + userValue];

    switch (randomNum) {
      case 0:
        document.querySelector("p").textContent = "Rock";
        break;
      case 1:
        document.querySelector("p").textContent = "Paper";
        break;
      case 2:
        document.querySelector("p").textContent = "Scissor";
        break;
      default:
        document.querySelector("p").textContent = "fail";
        break;
    }
    result.textContent = outcomeValue;
    result.style.color = "red";
    setTimeout(() => {
      result.textContent = "Choose your move..!";
      result.style.color = "#176B87";
    }, 5000);
  });
});
