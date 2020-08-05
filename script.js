function update() {
  const date = new Date();

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = ((date.getHours() + 11) % 12) + 1;

  const secondDegree = seconds * 6;
  const minuteDegree = minutes * 6 + (seconds * 6) / 60;
  const hourDegree = hours * 30 + (minutes * 30) / 60;

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

setInterval(update, 1000);
