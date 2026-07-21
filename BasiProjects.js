// The Program to Hide the Email
function maskEmail(email){
  const atIdx = email.indexOf("@");
  const chgAst = email.slice(1,atIdx-1);
  const result = email.replace(chgAst, '*'.repeat(chgAst.length));
  return result
}
const email = "apple.pie@example.com";
console.log(maskEmail(email))  // output: a*******e@example.com

// The Program to manage menu for lunch
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
