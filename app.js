// HELPER FUNCTIONS
function calculateTrainingMax(oneRepMax) {
  return oneRepMax * 0.9;
}

function roundDownToNearest10(workingSet) {
  let floored = Math.floor(workingSet);
  let remainder = floored % 10;
  return floored - remainder;
}

function calculateWorkingSet(trainingMax, percentage) {
  return roundDownToNearest10((trainingMax * percentage) / 100);
}

// CONSTANTS

const WEEK1 = [65, 75, 85];
const WEEK2 = [70, 80, 90];
const WEEK3 = [75, 85, 95];

// SELECT DOM ELEMENTS
const calculateBtn = document.querySelector(".btn--calc");
const ohpInputEl = document.querySelector("#ohp");
const sqtInputEl = document.querySelector("#sqt");
const dltInputEl = document.querySelector("#dlt");

calculateBtn.addEventListener("click", generateCycle);

function generateCycle() {
  const ohpTM = calculateTrainingMax(parseFloat(ohpInputEl.value));
  const sqtTM = calculateTrainingMax(parseFloat(sqtInputEl.value));
  const dltTM = calculateTrainingMax(parseFloat(dltInputEl.value));

  const cycle = {
    ohp: {
      week1: [WEEK1.map((p) => calculateWorkingSet(ohpTM, p))],
      week2: [WEEK2.map((p) => calculateWorkingSet(ohpTM, p))],
      week3: [WEEK3.map((p) => calculateWorkingSet(ohpTM, p))],
    },
    sqt: {
      week1: [WEEK1.map((p) => calculateWorkingSet(sqtTM, p))],
      week2: [WEEK2.map((p) => calculateWorkingSet(sqtTM, p))],
      week3: [WEEK3.map((p) => calculateWorkingSet(sqtTM, p))],
    },
    dlt: {
      week1: [WEEK1.map((p) => calculateWorkingSet(dltTM, p))],
      week2: [WEEK2.map((p) => calculateWorkingSet(dltTM, p))],
      week3: [WEEK3.map((p) => calculateWorkingSet(dltTM, p))],
    },
  };

  console.log(cycle);
}
