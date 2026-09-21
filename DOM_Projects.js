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

//  ====================================================== Program to  Build a RegEx Sandbox=====================================================
// ==============>>>>>>>>>> index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Regex Sandbox</title>
</head>
<body>
    <h1>Regex Sandbox</h1>
    <main>
        <div id="regex-container">
            <label for="pattern">Regex Pattern:
                <div id="pattern-container">/<input type="text" id="pattern" name="pattern"
                        placeholder="Enter your regex pattern">/</div>
            </label>
            <div id="flags-container">
                <p>Flags: </p>
                <label for="i">
                    <input type="checkbox" name="flags" id="i"> i
                </label>
                <label for="g">
                    <input type="checkbox" name="flags" id="g"> g
                </label>
            </div>
        </div>
        <div id="test-container">
            <p>Test String:</p>
            <div id="test-string" placeholder="Enter your test string" contenteditable="true"></div>
        </div>
        <button class="btn" id="test-btn" type="button">Test Regex</button>
        <div id="result-container">
            <h2>Result:</h2>
            <p id="result">
            </p>
        </div>
    </main>
    <script src="script.js"></script>
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
    --dark-grey: #1b1b32;
    --light-grey: #f5f6f7;
    --golden-yellow: #fecc4c;
    --yellow: #ffcc4c;
    --gold: #feac32;
    --orange: #ffac33;
    --dark-orange: #f89808;
    --border: 0.2rem solid darkgrey;
    --padding: 0.3rem;
}

body {
    background-color: var(--dark-grey);
    color: var(--light-grey);
    font-size: 20px;
    font-family: "Lato", Helvetica, Arial, sans-serif;
    padding: 5px;
}

h1 {
    margin: 5rem auto 2rem;
    text-align: center;
}

p {
    padding: var(--padding);
}

#regex-container {
    max-width: 680px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: var(--border);
}

#regex-container>label {
    padding: var(--padding);
    flex: 1 1 auto;
}

#pattern-container {
    display: inline-block;
    color: var(--dark-grey);
    background-color: var(--light-grey);
    margin: 5px;
    border: var(--border);
}

#pattern {
    margin: 0.2rem;
    border: 0;
    font-size: 1rem;
    width: calc(100% - 1.2rem);
}

#pattern:focus {
    outline: none;
}
#flags-container {
    display: flex;
    align-items: center;
    flex: 1 1 auto;
}
#flags-container>label {
    padding: var(--padding);
    margin-right: 0.3rem;
}
#test-container {
    max-width: 680px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    border: var(--border);
}
#test-string {
    background-color: var(--light-grey);
    min-height: 5rem;
    color: var(--dark-grey);
    border-top: var(--border);
    font-size: 1.2rem;
}

[contenteditable=true]:empty:before {
    content: attr(placeholder);
    pointer-events: none;
    color: var(--dark-grey);
}

::placeholder {
    color: var(--dark-grey);
}
button {
    display: block;
    cursor: pointer;
    width: 8rem;
    margin: 0.2rem auto;
    color: var(--dark-grey);
    background-color: var(--gold);
    background-image: linear-gradient(var(--golden-yellow), var(--orange));
    border-color: var(--gold);
    border-width: 0.2rem;
    font-size: 1.1rem;
}
.btn:hover {
    background-image: linear-gradient(var(--yellow), var(--dark-orange));
}
#result-container {
    max-width: 680px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
h2 {
    align-self: flex-start;
    margin: 0.4rem 0.2rem 0.2rem;
    flex: 0 1 auto;
}
#result {
    color: var(--dark-grey);
    background-color: var(--light-grey);
    font-size: 1.5rem;
    flex: 1 1 auto;
    margin: 0.2rem;
    border: var(--border);
    min-height: 3rem;
}
.highlight {
    background-color: lightgreen;
}

// ==============>>>>>>>>>> script.js
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  return `${caseInsensitiveFlag.checked ? "i" : ""}${globalFlag.checked ? "g" : ""}`;
}
testButton.addEventListener("click", () => {
  const newRegex = RegExp(regexPattern.value, getFlags());
  stringToTest.innerHTML = stringToTest.textContent.replace(newRegex, match => `<span class='highlight'>${match}</span>`)

  if (stringToTest.textContent.match(newRegex) == null) {
    testResult.textContent = "no match"
  }
  else {
    testResult.innerText = stringToTest.textContent.match(newRegex).join(", ")
  }
})




// ==================================================================================================================================================================================================================
                                                                                                //  MEGA PROJECT  //
// ==================================================================================================================================================================================================================

//  ====================================================== Program to  Build an Envelope Budget App =====================================================
// =============>>>>>>>>>>  index.HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Envelope Budgeter</title>
  </head>

  <body>
    <main>
      <h1>Envelope Budgeter</h1>
      <div class="container">
        <form id="budget-form">
          <label for="income">Total Monthly Income</label>
          <input 
            type="number" 
            min="0" 
            id="income" 
            placeholder="e.g. 2000" 
            required 
          />

          <fieldset id="rent">
            <legend>Rent</legend>
            <label for="rent-amount">Amount</label>
            <input type="number" min="0" id="rent-amount" placeholder="e.g. 1000" />
          </fieldset>

          <fieldset id="food">
            <legend>Food</legend>
            <div class="input-container"></div>
          </fieldset>

          <fieldset id="utilities">
            <legend>Utilities</legend>
            <div class="input-container"></div>
          </fieldset>

          <fieldset id="entertainment">
            <legend>Entertainment</legend>
            <div class="input-container"></div>
          </fieldset>

          <div class="controls">
            <span>
              <label for="entry-dropdown">Add expense to:</label>
              <select id="entry-dropdown" name="options">
                <option value="food" selected>Food</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
              </select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>

          <div>
            <button type="submit">
              Calculate Remaining Budget
            </button>
            <button type="button" id="clear">Clear</button>
          </div>
        </form>

        <div id="output" class="output hide"></div>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>

// =============>>>>>>>>>>  style.css
:root {
  --light-grey: #f5f6f7;
  --dark-blue: #0a0a23;
  --fcc-blue: #1b1b32;
  --light-yellow: #fecc4c;
  --dark-yellow: #feac32;
  --light-pink: #ffadad;
  --dark-red: #850000;
  --light-green: #acd157;
}

body {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: var(--fcc-blue);
  color: var(--light-grey);
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1 {
  text-align: center;
  margin-top: 30px;
  font-size: 2em;
}

.container {
  width: 90%;
  max-width: 680px;
  margin: 20px auto;
  padding: 20px;
  background-color: var(--dark-blue);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

label,
legend {
  font-weight: bold;
  margin-bottom: 5px;
}

fieldset {
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
}

legend {
  padding: 0 8px;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

input,
select,
button {
  font-size: 16px;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  min-height: 32px;
  box-sizing: border-box;
}

input:focus,
select:focus,
button:focus {
  outline: 2px solid var(--light-yellow);
  border-color: var(--dark-yellow);
}

button {
  cursor: pointer;
  text-decoration: none;
  background-color: var(--light-yellow);
  border: 2px solid var(--dark-yellow);
  transition: background-color 0.2s ease, border 0.2s ease;
}

button:hover {
  background-color: var(--dark-yellow);
  color: white;
}

.controls {
  margin-bottom: 20px;
}

.controls span {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.output {
  border: 2px solid var(--light-grey);
  padding: 15px;
  text-align: center;
  background-color: var(--dark-blue);
  border-radius: 6px;
  margin-top: 20px;
}

.output span {
  font-weight: bold;
  font-size: 1.4em;
}

.surplus {
  color: var(--light-green);
}

.deficit {
  color: var(--light-pink);
}

.hide {
  display: none;
}

@media (max-width: 600px) {
  body {
    font-size: 16px;
  }

  .controls span {
    flex-direction: column;
    align-items: stretch;
  }

  button,
  input,
  select {
    width: 100%;
  }
}

// =============>>>>>>>>>>  script.js
const budgetForm = document.getElementById("budget-form");
const incomeInput = document.getElementById("income");
const rentInput = document.getElementById("rent-amount");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const category = entryDropdown.value;
  const targetInputContainer = document.querySelector(`#${category} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

  const HTMLString = `
  <label for="${category}-${entryNumber}-name">Expense ${entryNumber} Name</label>
  <input type="text" id="${category}-${entryNumber}-name" placeholder="Name" />
  <label for="${category}-${entryNumber}-amount">Expense ${entryNumber} Amount</label>
  <input 
    type="number" 
    min="0" 
    id="${category}-${entryNumber}-amount" placeholder="Amount" 
    />`;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function calculateBudget(e) {
  e.preventDefault();
  isError = false;

  const foodInputs = document.querySelectorAll("#food input[type='number']");
  const utilitiesInputs = document.querySelectorAll("#utilities input[type='number']");
  const entertainmentInputs = document.querySelectorAll("#entertainment input[type='number']");

  const rent = getTotalFromInputs([rentInput]);
  const food = getTotalFromInputs(foodInputs);
  const utilities = getTotalFromInputs(utilitiesInputs);
  const entertainment = getTotalFromInputs(entertainmentInputs);
  const income = getTotalFromInputs([incomeInput]);

  if (isError) {
    return;
  }

  const expenses = rent + food + utilities + entertainment;
  const netRemaining = income - expenses;

  let statusText = "";
  let statusClass = "";

  if (netRemaining < 0) {
    statusText = `Over Budget by $${Math.abs(netRemaining)}`;
    statusClass = "deficit";
  } else {
    statusText = `$${netRemaining} Remaining`;
    statusClass = "surplus";
  }

  output.innerHTML = `
    <span class="${statusClass}">${statusText}</span>
    <hr>
    <p>$${income} Total Income</p>
    <p>$${expenses} Total Expenses</p>
  `;

  output.classList.remove("hide");
}

function getTotalFromInputs(list) {
  let total = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    total += Number(currVal);
  }
  return total;
}

function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll(".input-container"));

  for (const container of inputContainers) {
    container.innerHTML = "";
  }

  incomeInput.value = "";
  rentInput.value = "";
  output.innerText = "";
  output.classList.add("hide");
}

addEntryButton.addEventListener("click", addEntry);
budgetForm.addEventListener("submit", calculateBudget);
clearButton.addEventListener("click", clearForm)

// ==================================================================================================================================================================================================================
                                                                                                //  MEGA PROJECT  //
// ==================================================================================================================================================================================================================
