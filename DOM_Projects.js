//  ====================================================== Program to Build an Emoji Reactor App =====================================================
// ==================>>>>>>>>>>>>>>>> index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Emoji Reactor</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <main>
    <h1 class="title">How are you feeling today?</h1>
    <p class="description">
      Click on the buttons below to rate your emotions.
    </p>
    <div class="btn-container">
      <button id="happy-btn" class="emoji-btn" aria-label="Happy face emoji">
        <span role="img" aria-hidden="true">😊</span>
        <span class="count">0/10</span>
      </button>
      <button
        id="confused-btn"
        class="emoji-btn"
        aria-label="Confused face emoji"
      >
        <span role="img" aria-hidden="true">😕</span>
        <span class="count">0/10</span>
      </button>
      <button id="sad-btn" class="emoji-btn" aria-label="Angry face emoji">
        <span role="img" aria-hidden="true">😠</span>
        <span class="count">0/10</span>
      </button>
      <button
        id="loving-btn"
        class="emoji-btn"
        aria-label="Loving face emoji"
      >
        <span role="img" aria-hidden="true">😍</span>
        <span class="count">0/10</span>
      </button>
    </div>
  </main>
  <script src="./script.js"></script>
</body>
</html>

// ===================>>>>>>>>>>>>>>> style.css 
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --light-grey: #efefef;
  --white: #ffffff;
  --very-dark-blue: #0a0a23;
  --light-purple: #a78bfa;
  --very-light-purple: #c4b5fd;
  --purple: #8b5cf6;
}

body {
  background-color: var(--very-dark-blue);
  color: var(--light-grey);
  font-family: sans-serif;
}

main {
  text-align: center;
  padding: 10px;
}

.btn-container,
button {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.btn-container {
  flex-direction: column;
}

.emoji-btn {
  width: 70%;
  cursor: pointer;
  color: var(--white);
  background-color: var(--light-purple);
  background-image: linear-gradient(
    to bottom,
    var(--very-light-purple),
    var(--light-purple)
  );
  border: 3px solid var(--purple);
  border-radius: 8px;
  padding: 10px;
  font-size: 1.5rem;
  margin: 10px 0;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

@media (min-width: 768px) {
  .emoji-btn {
    width: 30%;
  }
}

.emoji-btn:hover {
  background-color: var(--purple);
  background-image: none;
}

.title {
  margin-top: 15px;
  font-size: 2rem;
}

.description {
  font-size: 1.4rem;
  margin: 20px 0;
}

//==================>>>>>>>>>>>>. script.js
function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  if (currCount === 10) return;
  currCount++;
  countEl.textContent = `${currCount}/10`;
}
const btns = document.querySelectorAll(".emoji-btn");
btns.forEach((btn)=> btn.addEventListener("click", ()=>updateCount(btn)))


//  ====================================================== Program to Build a Music Instrument Filter =====================================================

// ==============>>>>>>>>>>>>>>> index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music Instruments product page</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>Student Instruments</h1>
    <main>
      <select class="select-container">
        <option id="all" value="all">All</option>
        <option id="woodwinds" value="woodwinds">Woodwinds</option>
        <option id="brass" value="brass">Brass</option>
        <option id="percussion" value="percussion">Percussion</option>
      </select>
      <div class="products-container">
        <div class="card">
          <h2>Flute</h2>
          <p>$500</p>
        </div>
        <div class="card">
          <h2>Clarinet</h2>
          <p>$200</p>
        </div>
        <div class="card">
          <h2>Oboe</h2>
          <p>$4000</p>
        </div>
        <div class="card">
          <h2>Trumpet</h2>
          <p>$200</p>
        </div>
        <div class="card">
          <h2>Trombone</h2>
          <p>$300</p>
        </div>
        <div class="card">
          <h2>French Horn</h2>
          <p>$4300</p>
        </div>
        <div class="card">
          <h2>Drum Set</h2>
          <p>$500</p>
        </div>
        <div class="card">
          <h2>Xylophone</h2>
          <p>$3000</p>
        </div>
        <div class="card">
          <h2>Cymbals</h2>
          <p>$200</p>
        </div>
        <div class="card">
          <h2>Marimba</h2>
          <p>$3000</p>
        </div>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
// =============>>>>>>>>>>>>> style.css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --dark-grey: #0a0a23;
  --white: #ffffff;
  --yellow: #f1be32;
}

body {
  background-color: var(--dark-grey);
  color: var(--white);
}
h1 {
  text-align: center;
  margin-top: 20px;
}
.select-container {
  display: block;
  margin: 25px auto;
  padding: 8px;
  border: 4px solid var(--white);
  border-radius: 4px;
  width: 200px;
}
.products-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
@media (min-width: 760px) {
  .products-container {
    flex-direction: row;
  }
}
.card {
  background-color: var(--white);
  color: var(--dark-grey);
  border: 4px solid var(--yellow);
  border-radius: 5px;
  padding: 10px;
  width: 200px;
}

// ================>>>>>>>>>>>>>>>>   script.js
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
];
const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );
  return instruments
    .map(({ instrument, price }) => {
      return `
          <div class="card">
            <h2>${instrument}</h2>
            <p>$${price}</p>
          </div>
        `;
    })
    .join("");
}
selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});

//  ====================================================== Program to Build a Real Time Counter =====================================================

// ===============>>>>>>>>>>>>  index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Time Counter</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<textarea id="text-input" placeholder="Type Something..."></textarea>
<p id="char-count">Character Count: 0/50</p>
<script src="script.js"></script>
</body>
</html>
// ==============>>>>>>>>>>>  style.css
.red{
  color: red;
}
// ============>>>>>>>>>>>>  script.js
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
textInput.addEventListener("input", (event)=>{
  if(event.target.value.length < 50){
    charCount.innerHTML = `Character Count: ${event.target.value.length}/50`
  }else if(event.target.value.length == 50){
    charCount.innerHTML = `Character Count: ${event.target.value.length}/50`;
    charCount.classList.add("red");
  }else{
    textInput.value = textInput.value.slice(0,50);
  }
});

//  ====================================================== Program to Build a Set of Football Team Cards =====================================================

// ==============>>>>>>>>>> index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      Build a Set of Football Team Cards
    </title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 class="title">Team stats</h1>
    <main>
      <div class="team-stats">
        <p>Team: <span id="team"></span></p>
        <p>Year: <span id="year"></span></p>
        <p>Head coach: <span id="head-coach"></span></p>
      </div>
      <label class="options-label" for="players">Filter Teammates:</label>
      <select name="players" id="players">
        <option value="all">All Players</option>
        <option value="forward">Position Forward</option>
        <option value="midfielder">Position Midfielder</option>
        <option value="defender">Position Defender</option>
        <option value="goalkeeper">Position Goalkeeper</option>
      </select>
      <div class="cards" id="player-cards"></div>
    </main>
    <footer>&copy; freeCodeCamp</footer>
    <script src="./script.js"></script>
  </body>
</html>

// ==============>>>>>>>>>> style.css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --dark-grey: #0a0a23;
  --light-grey: #f5f6f7;
  --white: #ffffff;
  --black: #000;
}

body {
  background-color: var(--dark-grey);
  text-align: center;
  padding: 10px;
}

.title,
.options-label,
.team-stats,
footer {
  color: var(--white);
}

.title {
  margin: 1.3rem 0;
}

.team-stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 1.3rem;
  margin: 1.2rem 0;
}

.options-label {
  font-size: 1.2rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.player-card {
  background-color: var(--light-grey);
  padding: 1.3rem;
  margin: 1.2rem;
  width: 300px;
  border-radius: 15px;
}
@media (max-width: 768px) {
  .team-stats {
    flex-direction: column;
  }
}

// ==============>>>>>>>>>> script.js
const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false
    },

    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false
    },

    {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false
    },

    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false
    },

    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false
    },

    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false
    },

    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false
    },

    {
      name: "Néstor Clausen",
      position: "defender",
      isCaptain: false
    },

    {
      name: "José Luis Cuciuffo",
      position: "defender",
      isCaptain: false
    },

    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true
    },

    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false
    },

    {
      name: "Héctor Enrique",
      position: "midfielder",
      isCaptain: false
    },

    {
      name: "Oscar Garré",
      position: "defender",
      isCaptain: false
    },

    {
      name: "Ricardo Giusti",
      position: "midfielder",
      isCaptain: false
    },

    {
      name: "Luis Islas",
      position: "goalkeeper",
      isCaptain: false
    },

    {
      name: "Julio Olarticoechea",
      position: "defender",
      isCaptain: false
    },

    {
      name: "Pedro Pasculli",
      position: "forward",
      isCaptain: false
    },

    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false
    },

    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false
    },

    {
      name: "Carlos Tapia",
      position: "midfielder",
      isCaptain: false
    },

    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false
    },

    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      isCaptain: false
    },
  ]
}
const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const playerCards = document.getElementById("player-cards");
const players = document.getElementById("players");
headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
players.addEventListener("change", (event) => {
  console.log(event.target.value);
  playerCards.innerHTML = ""
  for (const player of footballTeam.players) {
    if (player.position == event.target.value && event.target.value != "all") {
      if (player.isCaptain) {
        playerCards.innerHTML += `<div class="player-card"><h2>(Captain) ${player.name}</h2><p>Position: ${player.position}</p></div>`;
        continue
      };
      playerCards.innerHTML += `<div class="player-card"><h2>${player.name}</h2><p>Position: ${player.position}</p></div>`;
    }else if(event.target.value == "all"){
      if (player.isCaptain) {
        playerCards.innerHTML += `<div class="player-card"><h2>(Captain) ${player.name}</h2><p>Position: ${player.position}</p></div>`;
        continue
      };
      playerCards.innerHTML += `<div class="player-card"><h2>${player.name}</h2><p>Position: ${player.position}</p></div>`;
    }
  };
})


//  ====================================================== Program to Build a Planets Tablist =====================================================
// ==============>>>>>>>>>> index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Planets Facts</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="tabs">
      <h2 id="tabs-title">Planets</h2>
      <div role="tablist" aria-labelledby="tabs-title">
        <button role="tab" aria-controls="panel-earth" aria-selected="true" id="tab-earth">🌍 Earth</button>
        <button role="tab" aria-controls="panel-saturn" aria-selected="false" id="tab-saturn">🪐 Saturn</button>
        <button role="tab" aria-controls="panel-mars" aria-selected="false" id="tab-mars">🔴 Mars</button>
      </div>

      <div id="panel-earth" role="tabpanel" aria-labelledby="tab-earth">
        <p>
          Earth is our home planet, known for its abundant water, diverse ecosystems, and life-supporting atmosphere. It's the only planet in the solar system known to harbor life.
        </p>
      </div>
      <div id="panel-saturn" role="tabpanel" aria-labelledby="tab-saturn" hidden>
        <p>
          Saturn is famous for its beautiful and extensive ring system made of ice and rock particles. It's a gas giant with dozens of moons orbiting it.
        </p>
      </div>
      <div id="panel-mars" role="tabpanel" aria-labelledby="tab-mars" hidden>
        <p>
          Mars, the red planet, is a rocky world with the tallest volcano and deepest canyon in the solar system. It's a key focus for exploration in the search for past or present life.
        </p>
      </div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>

// ==============>>>>>>>>>> style.css
.tabs [role="tablist"] {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

[role="tab"] {
  padding: 0.5rem 1rem;
  background: #eee;
  border: 1px solid #ccc;
  cursor: pointer;
  font-weight: bold;
}

[role="tab"][aria-selected="true"] {
  background: #fff;
  border-bottom: 2px solid dodgerblue;
}

[role="tabpanel"] {
  border: 1px solid #ccc;
  padding: 1rem;
}

// ==============>>>>>>>>>> script.js
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.setAttribute("aria-selected", "false"));
    panels.forEach(p => p.hidden = true);

    tab.setAttribute("aria-selected", "true");
    const associatedPanel = tab.getAttribute("aria-controls");
    const panel = document.getElementById(associatedPanel);
    panel.hidden = false
  });
});

//  ====================================================== Program to  =====================================================
