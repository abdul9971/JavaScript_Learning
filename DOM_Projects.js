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

//  ====================================================== Program to Build =====================================================
