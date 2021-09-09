let player = (players) => {
    switch (players) {
      case "1":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player6.png";
        break;
      case "2":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player5.png";
        break;
      case "3":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player4.png";
        break;
      case "4":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player3.png";
        break;
      case "5":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player2.png";
        break;
      case "6":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player1.png";
        break;
      case "7":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player1-1.jpg";
        break;
      case "8":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player1-2.jpg";
        break;
      case "9":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player1-3.jpg";
        break;
      case "10":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player1-4.jpg";
        break;
      case "11":
        document.getElementById("Info").style.opacity = 1;
        document.getElementById("Info").style.zIndex = "1";
        document.getElementById("players").src = "./assets/Player1-5.jpg";
        break;
    }
  };
  let hide = () => {
    document.getElementById("Info").style.opacity = 0;
    document.getElementById("Info").style.zIndex = "-1";
  };