// ==================== The Program to Hide the Email  =============================
function maskEmail(email){
  const atIdx = email.indexOf("@");
  const chgAst = email.slice(1,atIdx-1);
  const result = email.replace(chgAst, '*'.repeat(chgAst.length));
  return result
}
const email = "apple.pie@example.com";
console.log(maskEmail(email))  // output: a*******e@example.com

// ==================== The Program to manage menu for lunch =====================
const lunches = [];   // list of lunches

// function to add lunch at Ending
function addLunchToEnd(arr, str){
  console.log(`${str} added to the end of the lunch menu.`);
  arr.push(str);
  return arr
}
// function to add lunch at starting
function addLunchToStart(arr, str){
  console.log(`${str} added to the start of the lunch menu.`);
  arr.unshift(str);
  return arr
}
// function to remove lunch from  Ending
function removeLastLunch(arr){
  if (arr.length == 0){
    console.log("No lunches to remove.");
  }
  else{
    const rmItem = arr.pop();
    console.log(`${rmItem} removed from the end of the lunch menu.`);
    return arr;
  }
}
// function to remove lunch from startig
function removeFirstLunch(arr){
  if (arr.length == 0){
    console.log("No lunches to remove.");
  }
  else{
    const rmItem = arr.shift();
    console.log(`${rmItem} removed from the start of the lunch menu.`);
    return arr;
  }
}
// Select Rendom Lunch
function getRandomLunch(arr){
  if (arr.length == 0){
    console.log("No lunches available.");
  }
  else{
    const rndIdx = Math.floor(Math.random()*arr.length);
    console.log(`Randomly selected lunch: ${arr[rndIdx]}`);
  }
}
// See Full Lunch Menu
function showLunchMenu(arr){
  if (arr.length == 0){
    console.log("The menu is empty.");
  }
  else{
    console.log(`Menu items: ${arr.join(", ")}`)
  }
}

// test
addLunchToEnd(lunches, "Tacos");
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

addLunchToStart(lunches, "Sushi");
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"])


// ======================= The program to Manage Song Album =====================
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Main function to add any property and its value
function updateRecords(records, id, prop, value){
  if(value.trim() == ''){
    delete records[id][prop]
  }else if ((prop != 'tracks')&&(value.trim() != '')){
    records[id][prop] = value;
  }else if ((prop == 'tracks')&&(value.trim() != '')&&!('tracks' in records[id])){
    records[id][prop] = [value];
  }else if ((prop == 'tracks')&&(value.trim() != '')){
    records[id][prop].push(value);
  }
  return records
};

// ======================= The program to Build Space Mission Roster =====================

const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

// function to add crew Member in Roster
function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  crew.push(astronaut);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
];

for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}

// Interchange crew member position
function swapCrewMembers(crew, fromIndex, toIndex) {
  if (
    fromIndex < 0 || 
    toIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex >= crew.length
  ) {
    console.log("Invalid crew indices");
    return;
  }

  const updatedCrew = crew.slice();
  updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];

  return updatedCrew; 
}

const updatedSquad = swapCrewMembers(squad, 2, 5);

// Sort Roster Descending order
function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length - 1; i++) {
    for (let j = 0; j < crew.length - 1 - i; j++) {
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

// check who is eligible
function getEVAReadyCrew(crew) {
  const eligible = [];
  for (const astronaut of crew) {
    if (astronaut.isEVAEligible) eligible.push(astronaut);
  }
  sortByPriorityDescending(eligible); 

  return eligible;
}

const EVAReadySquad = getEVAReadyCrew(updatedSquad);

function chunkCrew(crew, size) {
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }

  const chunks = [];
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }

  return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);

// print Summary of crew
function printCrewSummary(crew) {
  const sorted = crew.slice();
  sortByPriorityDescending(sorted); 
  for (const astronaut of sorted) {
    console.log(astronaut.name);
  }
}

printCrewSummary(updatedSquad)


// ======================= The program to Build Haritage libarary catalog =====================
const rawCatalogCards = [
  "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
  "The Shining | King, Stephen | 1977 | Shelf K1",
  "The Stand | King, Stephen | 1978 | Shelf K2",
  "It | King, Stephen | 1986 | Shelf K3",
  "Misery | King, Stephen | 1987 | Shelf K4",
  "Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5",
  "I, Robot | Asimov, Isaac | 1950 | Shelf A8",
  "Foundation | Asimov, Isaac | 1951 | Shelf A9",
  "Dune | Herbert, Frank | 1965 | Shelf H3",
  "Neuromancer | Gibson, William | 1984 | Shelf G8",
  "Snow Crash | Stephenson, Neal | 1992 | Shelf S6",
  "The Martian | Weir, Andy | 2011 | Shelf W5",
  "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
  "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
  "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
  "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",
  // edge cases: missing data
  "Unknown Title |  | 1975 | Shelf X1",
  "Mysterious Manuscript | Unknown Author |  | Shelf Z9",
  "Ancient Scroll | Anonymous | 850 | ",
];

// To simplyfied raw data
function parseCard(rawString) {
  const parts = rawString.split("|");
  const trimmedParts = [];
  for (let i = 0; i < parts.length; i++) {
    trimmedParts.push(parts[i].trim());
  }
  const title = trimmedParts[0];
  const author = trimmedParts[1];
  const year = trimmedParts[2];
  const location = trimmedParts[3];
  return {
    title: title || "Unknown",
    author: author || "Unknown",
    year: year ? parseInt(year) : "Unknown",
    location: location || "Unknown"
  };
}

// create catalog
function parseCatalog(rawCards) {
  const catalog = [];
  for (let i = 0; i < rawCards.length; i++) {
    catalog.push(parseCard(rawCards[i]));
  }
  return catalog;
}

const catalog = parseCatalog(rawCatalogCards);

// find books by author
function findByAuthor(catalog, author) {
  const searchTerm = author.toLowerCase();
  const results = [];
  for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].author.toLowerCase().includes(searchTerm)) {
      results.push(catalog[i]);
    }
  }
  return results;
}

// groupp books by decades
function groupByDecade(catalog) {
  const grouped = {};
  for (let i = 0; i < catalog.length; i++) {
    const book = catalog[i];
    if (book.year === "Unknown") {
      if (!grouped["Unknown"]) {
        grouped["Unknown"] = [];
      }
      grouped["Unknown"].push(book);
      continue;
    }
    const decade = Math.floor(book.year / 10) * 10;
    const decadeKey = `${decade}s`;
    if (!grouped[decadeKey]) {
      grouped[decadeKey] = [];
    }
    grouped[decadeKey].push(book);
  }
  return grouped;
}

const byDecade = groupByDecade(catalog);

// render entries
function renderEntry(entry) {
  const title = entry.title || "Unknown";
  const author = entry.author || "Unknown";
  const year = entry.year || "Unknown";
  const location = entry.location || "Unknown";
  return `${"-".repeat(25)}
Title: ${title}
Author: ${author}
Year: ${year}
Location: ${location}
${"-".repeat(25)}`;
}

console.log(renderEntry(catalog[0]));

// Validate Entries
function validateEntry(entry) {
  let isValid = true;
  if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
    isValid = false;
  }
  if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
    isValid = false;
  }
  if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
    isValid = false;
  }
  if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
    isValid = false;
  }
  return isValid;
}

// Esport to JSON
function exportToJSON(catalog) {
  return JSON.stringify(catalog, null, 2);
}

// Export to CSV
function exportToCSV(catalog) {
  const header = "Title,Author,Year,Location";
  const rows = [];
  for (let i = 0; i < catalog.length; i++) {
    const entry = catalog[i];
    rows.push(`"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`);
  }
  let csv = header;
  for (let i = 0; i < rows.length; i++) {
    csv = csv + "\n" + rows[i];
  }
  return csv;
}

console.log(exportToCSV(catalog));

console.log(catalog.length);
console.log(Object.keys(byDecade).length)
let oldestYear = Infinity;
let newestYear = 0;
for (let i=0; i<catalog.length; i++){
  if(catalog[i].year != "Unknown"){
    if(catalog[i].year < oldestYear){
      oldestYear = catalog[i].year;
    }
    if (catalog[i].year > newestYear){
      newestYear = catalog[i].year
    }
  }
}
console.log(oldestYear)
console.log(newestYear)

// ============================================ Program to build Festival Crowd flow simulation ===============================================
const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

// Assining gates
function initializeThroughput(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  };
  return summary;
}

// How flow goes on each gate
function processGateFlow(gate, tickIndex) {
  let currentTickQueue = gate.queue[tickIndex];
  let processed = 0;
  while (currentTickQueue > 0 && processed < gate.capacity) {
    currentTickQueue--;
    processed++;
  }
  return {
    processed: processed,
    overflow: currentTickQueue
  };
}

// Caculate overflow 
function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
  const currentIndex = gates.indexOf(currentGate);
  const nextGateIndex = (currentIndex + 1) % gates.length;
  gates[nextGateIndex].queue[tickIndex] += overflowAmount;
  console.log(
    overflowAmount + " attendees rerouted to " +
    gates[nextGateIndex].id
  );
}

// Reroute overflow
function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
  console.log("\nProcessing " + gate.id + "...");
  console.log(
    gate.queue[tickIndex] + " attendees arriving."
  );
  const result = processGateFlow(gate, tickIndex);
  throughputSummary[gate.id] += result.processed;
  if (result.overflow > 0) {
    console.log(
      "Overflow of " + result.overflow +
      " attendees. Rerouting..."
    );
    rerouteOverflow(gates, gate, tickIndex, result.overflow);
  }
}

// improvising console
function printSummary(summary) {
  console.log("\nThroughput Summary");
  for (const gateId in summary) {
    console.log(
      gateId + ": " + summary[gateId] +
      " attendees processed"
    );
  }
}

// using all function sequencially
function simulateFestival(gates, timeBlock) {
  console.log("\n" + timeBlock + " Simulation");
  const throughputSummary = initializeThroughput(gates);
  const maxTicks = gates[0].queue.length;
  let tickIndex = 0;
  while (tickIndex < maxTicks) {
    console.log("\nTick " + (tickIndex + 1));
    for (const gate of gates) {
      handleGateAtTick(gates, gate, tickIndex, throughputSummary);
    }
    tickIndex++;
  }
  printSummary(throughputSummary);
}

simulateFestival( morningGates, "Morning")

// ============================================ Program to find missing letter in alphabets ===============================================
function fearNotLetter(str){
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const fstIndex = alpha.indexOf(str[0]);
  const lstIndex = alpha.indexOf(str[str.length-1]);
  for (let i=fstIndex; i<lstIndex+1; i++){
    if(!str.includes(alpha[i])){
      return alpha[i]
    }
  }
  return 
}
// run function
console.log(fearNotLetter("abce"))


// ============================================ Program to find Build an Inventory Management Program ===============================================
const inventory = []

function findProductIndex(proName) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == proName.toLowerCase()) {
      return i;
    }
  }
  return -1
}

function addProduct(productObj) {
  let notFound = true;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == productObj.name.toLowerCase()) {
      inventory[i].quantity += productObj.quantity;
      console.log(productObj.name.toLowerCase() + " quantity updated")
      notFound = false
    }
  }

  if (notFound) {
    productObj.name = productObj.name.toLowerCase()
    inventory.push(productObj);
    console.log(productObj.name + " added to inventory")
  }
}

function removeProduct(pName, pQuantity) {
  let isFound = false
  for (let i=0; i < inventory.length; i++) {
    if (inventory[i].name == pName.toLowerCase()) {
      isFound = true
      if (inventory[i].quantity - pQuantity == 0) {
        inventory.splice(i, 1)
      } else if (inventory[i].quantity - pQuantity < 0) {
        console.log(`Not enough ${inventory[i].name} available, remaining pieces: ${inventory[i].quantity}`)
      } else {
        inventory[i].quantity -= pQuantity;
        console.log(`Remaining ${inventory[i].name} pieces: ${inventory[i].quantity}`)
      }
    }
  }

  if (!isFound) {
    console.log(`${pName.toLowerCase()} not found`)
  }
}

removeProduct("FLOUR", 5)

// ============================================ Program to find Build a Playlist Remix Engine ===============================================

// Demo Data for testing
const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(plists) {
  const resPlaylist = []

  if (!Array.isArray(plists)) {
    return resPlaylist
  }

  for (let i = 0; i < plists.length; i++) {
    for (let j = 0; j < plists[i].length; j++) {
      const obj = {}
      for (let key in plists[i][j]) {
        obj[key] = plists[i][j][key]
      }
      obj['source'] = [i,j];
      resPlaylist.push(obj)
    }
  }
  return resPlaylist
}

function scoreTracks(newPList) {
  const resPlaylist = [];
  for (let i = 0; i < newPList.length; i++) {
    const obj = {}
    for (const key in newPList[i]) {
      obj[key] = newPList[i][key]
    }
    obj["score"] = newPList[i].votes * 10 - Math.abs(newPList[i].bpm - 120)
    resPlaylist.push(obj)
  }
  return resPlaylist
}

function dedupeTracks(scorePL) {
  const resPlaylist = [];
  for (let i = 0; i < scorePL.length; i++) {
    if (resPlaylist.length == 0) {
      resPlaylist.push(scorePL[i])
      continue
    }
    if (resPlaylist.some(obj => obj.trackId == scorePL[i].trackId)) { continue }
    resPlaylist.push(scorePL[i])
  }
  return resPlaylist
}

function enforceArtistQuota(dedupePL, maxNum) {
  const resPlaylist = []
  const artistNames = []
  for (let i = 0; i < dedupePL.length; i++) {
    if (resPlaylist.length == 0) {
      resPlaylist.push(dedupePL[i])
      artistNames.push(dedupePL[i].artist)
      continue
    }
    if (artistNames.indexOf(dedupePL[i].artist) != -1) {
      if (artistNames.filter(val => val == dedupePL[i].artist).length >= maxNum) {
        continue
      } else {
        resPlaylist.push(dedupePL[i]);
        artistNames.push(dedupePL[i].artist)
      }
    } else {
      resPlaylist.push(dedupePL[i]);
      artistNames.push(dedupePL[i].artist)
    }
  }
  return resPlaylist
}

function buildSchedule(eAQPL){
  const buildSchPL = []
  for(let i=0; i<eAQPL.length; i++){
    const obj = {};
    obj.slot = i+1
    obj.trackId = eAQPL[i].trackId;
    buildSchPL.push(obj)
  }
  return buildSchPL
}

function remixPlaylist(playlists, maxNum){
  const flattenPL = flattenPlaylists(playlists);
  const scorePL = scoreTracks(flattenPL);
  const dedupePL = dedupeTracks(scorePL);
  const eAQPL = enforceArtistQuota(dedupePL, maxNum);
  const buildSchPL = buildSchedule(eAQPL)
  return buildSchPL 
}

// ============================================ Program to Build a Storytelling App ===============================================

const storyContainer = document.querySelector(".story-container");

const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");

const resultParagraph = document.getElementById("result");

const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#ee4b2b"
  },
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32"
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157"
  }
};

function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre)) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

scaryStoryBtn.addEventListener("click", () => displayStory('scary'));
funnyStoryBtn.addEventListener("click", () => displayStory('funny'));
adventureStoryBtn.addEventListener("click", () => displayStory('adventure'));
