let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const age = 18;

if (registeredEarly && age > 18) {
  raceNumber += 1000;
}

if (registeredEarly && age > 18) {
  console.log(`${raceNumber}. Race begins at 9.30am`);
} else if (!registeredEarly && age > 18) {
  console.log(`${raceNumber}. Race begins at 11.00am`);
} else if (age < 18) {
  console.log(`${raceNumber}. Race begins at 12.30pm`);
} else {
  console.log(`${raceNumber}, please visit the registration desk.`)
}