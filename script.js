let secondDegree;
let minuteDegree;
let hourDegree;

let seconds;

function initialize() {
  const date = new Date();

  seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = ((date.getHours() + 11) % 12) + 1;

   secondDegree = seconds * 6;
   minuteDegree = minutes * 6 + (seconds * 6) / 60;
   hourDegree = hours * 30 + (minutes * 30) / 60;

   document.documentElement.style.setProperty(
    "--hourDegree",
    `${hourDegree}deg`
  );
  document.documentElement.style.setProperty(
    "--minuteDegree",
    `${minuteDegree}deg`
  );
  document.documentElement.style.setProperty(
    "--secondDegree",
    `${secondDegree}deg`
  );

   setInterval(update, 1000);
}

function update() {
  seconds = seconds + 1;

  secondDegree += 6;
  minuteDegree += 0.1;
   hourDegree += .1 / 60;

  const shine = document.querySelector(".shine");
  if (shine) shine.classList.remove("shine");

  switch (seconds) {
    case 0:
      document.getElementById("_12").classList.add("shine");
      break;
    case 15:
      document.getElementById("_3").classList.add("shine");
      break;
    case 30:
      document.getElementById("_6").classList.add("shine");
      break;
    case 45:
      document.getElementById("_9").classList.add("shine");
      break;
    default:
      break;
  }

  document.documentElement.style.setProperty(
    "--hourDegree",
    `${hourDegree}deg`
  );
  document.documentElement.style.setProperty(
    "--minuteDegree",
    `${minuteDegree}deg`
  );
  document.documentElement.style.setProperty(
    "--secondDegree",
    `${secondDegree}deg`
  );
}

function onChange() {
  if(toggle.checked) {
    document.documentElement.classList.add('theme-transition')
    document.documentElement.setAttribute('data-theme', 'dark')
    window.setTimeout(function() {
      document.documentElement.classList.remove('theme-transition')
    }, 1000)
  } else {
    document.documentElement.classList.add('theme-transition')
    document.documentElement.setAttribute('data-theme', 'light')
    window.setTimeout(function() {
      document.documentElement.classList.remove('theme-transition')
    }, 1000)
  }
}

initialize()
