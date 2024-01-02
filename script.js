const time = {}

const numbers = [3, 6, 9, 12]
const styleProperties = ['hourDegree', 'minuteDegree', 'secondDegree']

const numElements = new Map();

numbers.forEach(num => {
  numElements.set(num, document.getElementById(`_${num}`))
})

function initialize () {
  const date = new Date();

  time.seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = ((date.getHours() + 11) % 12) + 1;

  time.secondDegree = time.seconds * 6;
  time.minuteDegree = minutes * 6 + (time.seconds * 6) / 60;
  time.hourDegree = hours * 30 + (minutes * 30) / 60;

  setInterval(update, 1000);
}

function getNumberElement (seconds) {
  switch (seconds) {
    case 0:
      return numElements.get(12)
    case 15:
      return numElements.get(3)
    case 30:
      return numElements.get(6)
    case 45:
      return numElements.get(9)
  }
}

function update () {
  time.seconds = (time.seconds + 1) % 60;
  time.secondDegree += 6;
  time.minuteDegree += 0.1;
  time.hourDegree += .1 / 60;

  document.querySelector(".shine")?.classList.remove("shine");
  getNumberElement(time.seconds)?.classList.add("shine")

  styleProperties.forEach(props => {
    document.documentElement.style.setProperty(`--${props}`, `${time[props]}deg`)
  })
}

function onChange () {
  if (toggle.checked) {
    document.documentElement.classList.add('theme-transition')
    document.documentElement.setAttribute('data-theme', 'dark')
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 1000)
  } else {
    document.documentElement.classList.add('theme-transition')
    document.documentElement.setAttribute('data-theme', 'light')
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 1000)
  }
}

initialize()
