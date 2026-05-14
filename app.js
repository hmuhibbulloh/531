// HELPER FUNCTIONS
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
const boardEl = document.querySelector(".board");
calculateBtn.addEventListener("click", renderUI);

function generateCycle() {
  const ohpTM = parseFloat(ohpInputEl.value);
  const sqtTM = parseFloat(sqtInputEl.value);
  const dltTM = parseFloat(dltInputEl.value);

  if (isNaN(ohpTM) || isNaN(sqtTM) || isNaN(dltTM)) {
    return false;
  } else {
    const cycle = {
      ohp: {
        week1: WEEK1.map((p) => calculateWorkingSet(ohpTM, p)),
        week2: WEEK2.map((p) => calculateWorkingSet(ohpTM, p)),
        week3: WEEK3.map((p) => calculateWorkingSet(ohpTM, p)),
      },
      sqt: {
        week1: WEEK1.map((p) => calculateWorkingSet(sqtTM, p)),
        week2: WEEK2.map((p) => calculateWorkingSet(sqtTM, p)),
        week3: WEEK3.map((p) => calculateWorkingSet(sqtTM, p)),
      },
      dlt: {
        week1: WEEK1.map((p) => calculateWorkingSet(dltTM, p)),
        week2: WEEK2.map((p) => calculateWorkingSet(dltTM, p)),
        week3: WEEK3.map((p) => calculateWorkingSet(dltTM, p)),
      },
    };

    return cycle;
  }
}

function renderUI() {
  const cycle = generateCycle();
  if (cycle) {
    let htmlW1 = `
    <h1>Week 1 (5/5/5+)</h1>
    <div class="flex">
      <div class="exercise">
        <p>Overhead Press</p>
        <ul>
          <li>Set 1: ${cycle.ohp.week1[0]}kg</li>
          <li>Set 2: ${cycle.ohp.week1[1]}kg</li>
          <li>Set 3: ${cycle.ohp.week1[2]}kg</li>
        </ul>
      </div>
        <div class="exercise">
        <p>Squat</p>
        <ul>
          <li>Set 1: ${cycle.sqt.week1[0]}kg</li>
          <li>Set 2: ${cycle.sqt.week1[1]}kg</li>
          <li>Set 3: ${cycle.sqt.week1[2]}kg</li>
        </ul>
      </div>
      <div class="exercise">
        <p>Deadlift</p>
        <ul>
          <li>Set 1: ${cycle.dlt.week1[0]}kg</li>
          <li>Set 2: ${cycle.dlt.week1[1]}kg</li>
          <li>Set 3: ${cycle.dlt.week1[2]}kg</li>
        </ul>
      </div>
    </div>
    `;

    let htmlW2 = `
    <h1>Week 2 (3/3/3+)</h1>
    <div class="flex">
      <div class="exercise">
        <p>Overhead Press</p>
        <ul>
          <li>Set 1: ${cycle.ohp.week2[0]}kg</li>
          <li>Set 2: ${cycle.ohp.week2[1]}kg</li>
          <li>Set 3: ${cycle.ohp.week2[2]}kg</li>
        </ul>
      </div>
        <div class="exercise">
        <p>Squat</p>
        <ul>
          <li>Set 1: ${cycle.sqt.week2[0]}kg</li>
          <li>Set 2: ${cycle.sqt.week2[1]}kg</li>
          <li>Set 3: ${cycle.sqt.week2[2]}kg</li>
        </ul>
      </div>
      <div class="exercise">
        <p>Deadlift</p>
        <ul>
          <li>Set 1: ${cycle.dlt.week2[0]}kg</li>
          <li>Set 2: ${cycle.dlt.week2[1]}kg</li>
          <li>Set 3: ${cycle.dlt.week2[2]}kg</li>
        </ul>
      </div>
    </div>
    `;

    let htmlW3 = `
    <h1>Week 3 (5/3/1+)</h1>
    <div class="flex">
      <div class="exercise">
        <p>Overhead Press</p>
        <ul>
          <li>Set 1: ${cycle.ohp.week3[0]}kg</li>
          <li>Set 2: ${cycle.ohp.week3[1]}kg</li>
          <li>Set 3: ${cycle.ohp.week3[2]}kg</li>
        </ul>
      </div>
        <div class="exercise">
        <p>Squat</p>
        <ul>
          <li>Set 1: ${cycle.sqt.week3[0]}kg</li>
          <li>Set 2: ${cycle.sqt.week3[1]}kg</li>
          <li>Set 3: ${cycle.sqt.week3[2]}kg</li>
        </ul>
      </div>
      <div class="exercise">
        <p>Deadlift</p>
        <ul>
          <li>Set 1: ${cycle.dlt.week3[0]}kg</li>
          <li>Set 2: ${cycle.dlt.week3[1]}kg</li>
          <li>Set 3: ${cycle.dlt.week3[2]}kg</li>
        </ul>
      </div>
    </div>
    `;
    boardEl.classList.add("visible");
    boardEl.innerHTML += htmlW1;
    boardEl.innerHTML += htmlW2;
    boardEl.innerHTML += htmlW3;
  } else {
    alert("Enter valid numbers");
  }
}
