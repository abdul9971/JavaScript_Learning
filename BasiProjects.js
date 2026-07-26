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
