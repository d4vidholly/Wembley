
        // Home team logic
        const teamSelectHome = document.getElementById('teamSelectHome');
        const teamBadgeHome = document.getElementById('teamBadgeHome');
        const divisionTextHome = document.getElementById('divisionTextHome');
        const starContainerHome = document.getElementById('starContainerHome');
        const stadiumTextHome = document.getElementById('stadiumTextHome');
        const prizeMoney = document.getElementById('prizeMoney');
      
        const teams = {
          "Arsenal": { badge: "arsenal.svg", division: "Premier Division", stars: "★★★", stadium: "Emirates Stadium", gate: "$12000", location: "North London" },
          "Man City": { badge: "man-city.svg", division: "Premier Division", stars: "★★★", stadium: "Etihad Stadium", gate: "$12000", location: "North-West" },
          "Man Utd": { badge: "man-utd.svg", division: "Premier Division", stars: "★★★", stadium: "Old Trafford", gate: "$15000", location: "North-West" },
          "Liverpool": { badge: "liverpool.svg", division: "Premier Division", stars: "★★★", stadium: "Anfield", gate: "$15000", location: "North-West" },
          "Chelsea": { badge: "chelsea.svg", division: "Championship", stars: "★★", stadium: "Stamford Bridge", gate: "$6000", location: "London" },
          "C Palace": { badge: "crystal-palace.svg", division: "Premier Division", stars: "★★★", stadium: "Selhurst Park", gate: "$6000", location: "London" },
          "Hull City": { badge: "hull-city.svg", division: "Third Division", stars: "★", stadium: "KC Stadium", gate: "$2400", location: "Yorkshire" },
          "Bristol City": { badge: "bristol-city.svg", division: "Championship", stars: "★★", stadium: "Ashton Gate", gate: "$3000", location: "Midlands" },
          "Blackpool": { badge: "blackpool.svg", division: "Third Division", stars: "★", stadium: "Bloomfield Road", gate: "$2400", location: "North West" },
          "Barnsley": { badge: "barnsley.svg", division: "Third Division", stars: "★", stadium: "Oakwell", gate: "$1500", location: "Yorkshire" },
          "Carlisle": { badge: "carlisle.svg", division: "Third Division", stars: "★", stadium: "Brunton Park", gate: "$900", location: "North East" },
          "Charlton Ath": { badge: "charlton-athletic.svg", division: "Third Division", stars: "★", stadium: "The Valley", gate: "$1500", location: "London" },
          "Bournemouth": { badge: "bournemouth.svg", division: "Third Division", stars: "★", stadium: "Vitality Stadium", gate: "$900", location: "South Coast" },
          "Exeter": { badge: "exeter.svg", division: "Third Division", stars: "★", stadium: "St James Park", gate: "$1500", location: "" },
          "Reading": { badge: "reading.svg", division: "Third Division", stars: "★", stadium: "Madjeski Stadium", gate: "$2400", location: "London" },
          "Hereford": { badge: "hereford.svg", division: "Third Division", stars: "★", stadium: "Edgar Street", gate: "$1500", location: "Hereford" },
          "Fulham": { badge: "fulham.svg", division: "Third Division", stars: "★", stadium: "Craven Cottage", gate: "$2400", location: "London" },
          "Portsmouth": { badge: "portsmouth.svg", division: "Third Division", stars: "★", stadium: "Fratton Park", gate: "$2400", location: "South Coast" },
          "Port Vale": { badge: "port-vale.svg", division: "Third Division", stars: "★", stadium: "Vale Park", gate: "$1500", location: "Midlands" },
          "Southend": { badge: "southend.svg", division: "Third Division", stars: "★", stadium: "Roots Hall", gate: "$1500", location: "London" },
          "Shrewsbury": { badge: "shrewsbury.svg", division: "Championship", stars: "★★", stadium: "King Power Stadium", gate: "$3000", location: "Midlands" },
          "Wrexham": { badge: "wrexham.svg", division: "Championship", stars: "★★", stadium: "Racecourse Ground", gate: "$3000", location: "Wales" },
          "Tottenham": { badge: "tottenham.svg", division: "Premier Division", stars: "★★★", stadium: "Tottenham Hotspur Stadium", gate: "$12000", location: "North London" },
          "Leeds Utd": { badge: "leeds.svg", division: "Premier Division", stars: "★★★", stadium: "Elland Road", gate: "$9000", location: "Yorkshire" },
          "Wolves": { badge: "wolves.svg", division: "Premier Division", stars: "★★★", stadium: "Molineux", gate: "$9000", location: "West Midlands" },
          "West Brom": { badge: "west-brom.svg", division: "Premier Division", stars: "★★★", stadium: "Hawthorns", gate: "$9000", location: "West Midlands" },
          "West Ham": { badge: "west-ham.svg", division: "Championship", stars: "★★", stadium: "London Stadium", gate: "$4500", location: "London" },
          "Watford": { badge: "watford.svg", division: "Championship", stars: "★★", stadium: "Vicarage Road", gate: "$4500", location: "London" },
          "Nottm Forest": { badge: "nottm-forest.svg", division: "Championship", stars: "★★", stadium: "City Ground", gate: "$4500", location: "Midlands" },
          "Rochdale": { badge: "rochdale.svg", division: "Third Division", stars: "★", stadium: "Spotlands", gate: "$900", location: "" },
          "Newcastle": { badge: "newcastle.svg", division: "Championship", stars: "★★", stadium: "St James Park", gate: "$6000", location: "North East" },
          "Wimbledon": { badge: "wimbledon.svg", division: "Third Division", stars: "★", stadium: "Plough Lane", gate: "$2400", location: "London" },
          "Spalding Utd": { badge: "spalding.svg", division: "Third Division", stars: "★", stadium: "Sir Halley Stewart Field", gate: "$900", location: "Midlands" },
          "Tow Law": { badge: "tow-law.svg", division: "Third Division", stars: "★", stadium: "Ironworks Road", gate: "$900", location: "North East" }
        };
      
        teamSelectHome.addEventListener('change', updateHomeTeamUI);
      
        function updateHomeTeamUI() {
          const selectedTeam = teamSelectHome.value;
      
          if (teams[selectedTeam]) {
            teamBadgeHome.src = teams[selectedTeam].badge;
            divisionTextHome.textContent = teams[selectedTeam].division;
            stadiumTextHome.textContent = teams[selectedTeam].stadium;
            starContainerHome.innerHTML = teams[selectedTeam].stars;
            starContainerHome.style.display = "block";
            prizeMoney.innerText = "" + teams[selectedTeam].gate; 
          } else {
            teamBadgeHome.src = "#"; 
            divisionTextHome.textContent = ""; 
            starContainerHome.style.display = "none"; 
            prizeMoney.innerText = "";
          }
          updateStadium();
        }
      
        function updateStadium() {
          const selectedRound = roundSelect.value;
          const selectedTeam = teamSelectHome.value;
      
          if (selectedRound === "Semi Final" || selectedRound === "Final") {
            stadiumTextHome.textContent = "Wembley";
            prizeMoney.innerText = roundData[selectedRound].revenue;
          } else if (teams[selectedTeam]) {
            stadiumTextHome.textContent = teams[selectedTeam].stadium;
            prizeMoney.innerText = teams[selectedTeam].gate;
          } else {
            stadiumTextHome.textContent = "";
            prizeMoney.innerText = "";
          }
        }
      
        // Away team logic
        const teamSelectAway = document.getElementById('teamSelectAway');
        const teamBadgeAway = document.getElementById('teamBadgeAway');
        const divisionTextAway = document.getElementById('divisionTextAway');
        const starContainerAway = document.getElementById('starContainerAway');
      
        teamSelectAway.addEventListener('change', updateAwayTeamUI);
      
        function updateAwayTeamUI() {
          const selectedTeam = teamSelectAway.value;
      
          if (teams[selectedTeam]) {
            teamBadgeAway.src = teams[selectedTeam].badge;
            divisionTextAway.textContent = teams[selectedTeam].division;
            starContainerAway.innerHTML = teams[selectedTeam].stars;
            starContainerAway.style.display = "block";
          } else {
            teamBadgeAway.src = "#"; 
            divisionTextAway.textContent = ""; 
            starContainerAway.style.display = "none";
          }
          enableSimulateButton();
        }

 // Round select logic
        const roundSelect = document.getElementById('roundSelect');
const ifDraw = document.getElementById('ifDraw');
const kickOffTime = document.getElementById('kickOffTime');

const roundData = {
  "Round of 32": {revenue: "-", ifDraw: "Replay if Draw", kickoff: "15:00 - Day", stadium: "",},
  "Round of 16": {revenue: "-", ifDraw: "Replay if Draw", kickoff: "19:45 - Night", stadium: ""},
  "Quarter Final": {revenue: "-", ifDraw: "Replay if Draw", kickoff: "15:00 - Day", stadium: ""},
  "Semi Final": {revenue: "$30000", ifDraw: "Penalty Shoot Out if Draw", kickoff: "15:00 - Day", stadium: "Wembley"},
  "Final": {revenue: "$75000", ifDraw: "Penalty Shoot Out if Draw", kickoff: "16:30 - Day", stadium: "Wembley"}
};

roundSelect.addEventListener('change', updateRoundUI);

function updateRoundUI() {
  const selectedRound = roundSelect.value;
  
  if (roundData[selectedRound]) {
    ifDraw.innerText = roundData[selectedRound].ifDraw;
    kickOffTime.innerText = roundData[selectedRound].kickoff;
  } else {
    ifDraw.innerText = "-";
    kickOffTime.innerText = "-";
  }
          updateStadium();
          enableSimulateButton();
        }

let isReplay = false;



//International Star probabilities

function calculateBonus(team) {
  const container = document.querySelector(`.${team}-team-stars`);
  const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');

  let bonus = 0;

  checkboxes.forEach(cb => {
    if (cb.value === 'Goalkeeper' || cb.value === 'Defender' || cb.value === 'Midfielder' || cb.value === 'Striker') {
      const chance = Math.random();
      if (chance <= 1) {
        bonus += 1;
      }
    }
  });

  return bonus;
}

      
        // ---- INITIALIZE on page load ----
        
        window.addEventListener('load', function () {
  updateHomeTeamUI();
  updateAwayTeamUI();
  updateRoundUI();
  enableSimulateButton();

  const matchSetup = document.getElementById('matchSetupContainer');
  const matchReport = document.getElementById('matchReportModal');
  const simulateButton = document.getElementById('simulateButton');
  const closeBtn = document.getElementById('closeReport');

  simulateButton.addEventListener('click', () => {
    const homeName = teamSelectHome.value;
    const awayName = teamSelectAway.value;
    const round = roundSelect.value;

    if (homeName && awayName && homeName !== "Select Team" && awayName !== "Select Team") {
      simulateMatch(homeName, awayName, round, isReplay);
    }
  });

  closeBtn.addEventListener('click', () => {
    matchReport.classList.add('hidden');
    matchSetup.classList.remove('blurred');
  });

  function simulateMatch(homeName, awayName, round, isReplay = false) {
    const homeBadge = teams[homeName].badge;
    const awayBadge = teams[awayName].badge;

    const homeStars = parseStars(teams[homeName].stars);
    const awayStars = parseStars(teams[awayName].stars);

    const homeGoals = rollGoals(homeStars, 'home');
    const awayGoals = rollGoals(awayStars, 'away');

    // Add bonus goals for international stars
    const homeBonus = calculateBonus('home');
    const awayBonus = calculateBonus('away');

    const finalHomeGoals = homeGoals + homeBonus;
    const finalAwayGoals = awayGoals + awayBonus;

    // Update match report UI
    document.getElementById('reportRound').innerText = `FA Cup ${round}${isReplay ? ' Replay' : ''} Result`;
    document.getElementById('reportHomeBadge').src = homeBadge;
    document.getElementById('reportAwayBadge').src = awayBadge;
    document.getElementById('reportHomeName').innerText = homeName.toUpperCase();
    document.getElementById('reportAwayName').innerText = awayName.toUpperCase();
    document.getElementById('reportScore').innerText = `${finalHomeGoals} - ${finalAwayGoals}`;

// Determine match result
let winnerKey;
let resultText;
const knockoutRounds = ['Semi Final', 'Final'];

if (finalHomeGoals > finalAwayGoals) {
  winnerKey = "home";
  resultText = (round === 'Final') 
    ? `${homeName} win the FA Cup!` 
    : `${homeName} progress to the next round`;
} else if (finalAwayGoals > finalHomeGoals) {
  winnerKey = "away";
  resultText = (round === 'Final') 
    ? `${awayName} win the FA Cup!` 
    : `${awayName} progress to the next round`;
} else {
  if (knockoutRounds.includes(round) || isReplay) {
    const winner = Math.random() < 0.5 ? homeName : awayName;
    winnerKey = (winner === homeName) ? "home" : "away";
    resultText = (round === 'Final') 
      ? `End of 90 minutes – ${winner} win the FA Cup on penalties` 
      : `End of 90 minutes – ${winner} win on penalties${isReplay ? '' : ''}`;
  } else {
    winnerKey = "draw";
    resultText = `Match Drawn – Replay Scheduled`;
    showReplayButton(homeName, awayName, round);
  }
}

    // Calculate and display gate revenue money
    const prize = calculatePrizeMoney(homeName, winnerKey, round);
    document.querySelector("#ticketHome p").textContent = `$${prize.home.toLocaleString()}`;
    document.querySelector("#ticketAway p").textContent = `$${prize.away.toLocaleString()}`;

    // Calculate and display round bonus money
    let homeBonusAmount = 0;
let awayBonusAmount = 0;

// No round bonus if Quarter Final ends in a draw (before replay)
if (!(round === 'Quarter Final' && winnerKey === 'draw' && !isReplay)) {
  homeBonusAmount = calculateRoundBonus(round, teams[homeName].stars);
  awayBonusAmount = calculateRoundBonus(round, teams[awayName].stars);
}

document.querySelector("#prizeHome p").textContent = `$${homeBonusAmount.toLocaleString()}`;
document.querySelector("#prizeAway p").textContent = `$${awayBonusAmount.toLocaleString()}`;

    // Calculate and display TV bonus money
    const tvBonus = calculateTVBonus(homeStars, awayStars, round, isReplay);
document.querySelector("#tvHome p").textContent = `$${tvBonus.home.toLocaleString()}`;
document.querySelector("#tvAway p").textContent = `$${tvBonus.away.toLocaleString()}`;

    // Update total earnings
    updateTotaliser();

    // Final UI updates
    document.getElementById('reportResult').innerText = resultText;
    document.getElementById('matchReportModal').classList.remove('hidden');
    document.getElementById('matchSetupContainer').classList.add('blurred');
  }

  function showReplayButton(away, home, round) {
    const replayButton = document.getElementById("replayButton");
    replayButton.classList.remove("hidden");

    // Remove old listeners
    const newButton = replayButton.cloneNode(true);
    replayButton.parentNode.replaceChild(newButton, replayButton);

    newButton.addEventListener("click", () => {
      simulateMatch(home, away, round, true);
      newButton.classList.add("hidden");
    });
  }

  function updateTotaliser() {
    const getAmount = (selector) => {
      const text = document.querySelector(selector).textContent.replace(/[^\d]/g, '');
      return Number(text) || 0;
    };

    const homeTotal = getAmount('#ticketHome p') + getAmount('#prizeHome p') + getAmount('#tvHome p');
    const awayTotal = getAmount('#ticketAway p') + getAmount('#prizeAway p') + getAmount('#tvAway p');

    document.querySelector('#totalHome p').textContent = `$${homeTotal.toLocaleString()}`;
    document.querySelector('#totalAway p').textContent = `$${awayTotal.toLocaleString()}`;
  }
});

function parseStars(starString) {
  return starString.replace(/[^★]/g, '').length; // Only count "★" symbols
}



// Add dice probability here

const goalChancesByStars = {

  home: {
  1: [
    { goals: 0, weight: 33.3 },
    { goals: 1, weight: 16.7 },
    { goals: 2, weight: 16.7 },
    { goals: 3, weight: 0 },
    { goals: 4, weight: 16.7 },
    { goals: 5, weight: 16.7 }
  ],
  2: [
    { goals: 0, weight: 16.7 },
    { goals: 1, weight: 16.7 },
    { goals: 2, weight: 33.3 },
    { goals: 3, weight: 16.7 },
    { goals: 4, weight: 16.7  },
    { goals: 5, weight: 0 },
  ],
  3: [
    { goals: 0, weight: 16.7 },
    { goals: 1, weight: 16.7 },
    { goals: 2, weight: 16.7 },
    { goals: 3, weight: 16.7 },
    { goals: 4, weight: 33.3 },
    { goals: 5, weight: 0 },
  ]
  },

  away: {
  1: [
  { goals: 0, weight: 33.3 },
    { goals: 1, weight: 16.7 },
    { goals: 2, weight: 16.7 },
    { goals: 3, weight: 0 },
    { goals: 4, weight: 16.7 },
    { goals: 5, weight: 16.7 }

  ],
  2: [
  { goals: 0, weight: 16.7 },
    { goals: 1, weight: 33.3 },
    { goals: 2, weight: 16.7 },
    { goals: 3, weight: 0 },
    { goals: 4, weight: 16.7 },
    { goals: 5, weight: 0 }

  ],
  3: [
  { goals: 0, weight: 16.7 },
    { goals: 1, weight: 16.7 },
    { goals: 2, weight: 16.7 },
    { goals: 3, weight: 33.3 },
    { goals: 4, weight: 16.7 },
    { goals: 5, weight: 0 }
  ]
}

};

function rollGoals(stars, side = 'home') {
  const goalChances = goalChancesByStars[side]?.[stars] || [];

  // Calculate total weight
  const totalWeight = goalChances.reduce((sum, entry) => sum + entry.weight, 0);

  // Generate random number
  const random = Math.random() * totalWeight;

  // Select goal based on weight
  let cumulative = 0;
  for (const entry of goalChances) {
    cumulative += entry.weight;
    if (random <= cumulative) {
      return entry.goals;
    }
  }

  // Fallback
  return 0;
}


// Prize Money

function parseMoney(moneyString) {
  return parseInt(moneyString.replace(/\$/g, "").replace(/,/g, ""));
}

function calculatePrizeMoney(homeTeam, winner, round) {
  let totalRevenue;

  if (round === "Semi Final" || round === "Final") {
    totalRevenue = parseMoney(roundData[round].revenue);
  } else {
    totalRevenue = parseMoney(teams[homeTeam].gate);
  }

  let homeShare = 0;
  let awayShare = 0;

  if (winner === "draw") {
    homeShare = awayShare = totalRevenue / 2;
  } else if (winner === "home") {
    homeShare = (2 / 3) * totalRevenue;
    awayShare = (1 / 3) * totalRevenue;
  } else if (winner === "away") {
    homeShare = (1 / 3) * totalRevenue;
    awayShare = (2 / 3) * totalRevenue;
  }

  return {
    home: Math.round(homeShare),
    away: Math.round(awayShare)
  };
}

function calculateRoundBonus(round, stars) {
  const starNum = parseStars(stars); // convert "★★★" to 3

  const bonusMatrix = {
    "Quarter Final": { 3: 2000, 2: 4000, 1: 6000 },
    "Semi Final":    { 3: 4000, 2: 8000, 1: 12000 }
  };

  if (bonusMatrix[round]) {
    return bonusMatrix[round][starNum] || 0;
  }
  return 0;
}

const homePayoutElement = document.querySelector("#ticketHome p");
const awayPayoutElement = document.querySelector("#ticketAway p");

const homeTeam = teamSelectHome.value;
const round = roundSelect.value;

const prize = calculatePrizeMoney(homeName, awayName, winnerKey, selectedRound);

homePayoutElement.textContent = `$${prize.home.toLocaleString()}`;
awayPayoutElement.textContent = `$${prize.away.toLocaleString()}`;

// Calculate TV Bonus Money

function calculateTVBonus(homeStars, awayStars, round, isReplay = false) {
  let homeBonus = 0;
  let awayBonus = 0;

  const isKnockout = (round === 'Semi Final' || round === 'Final');

  // Rule 1: 1-star at home vs 3-star away (except for Semi/Final)
  if (!isKnockout && homeStars === 1 && awayStars === 3) {
    homeBonus += 1000;
    awayBonus += 0;
  }

  // Rule 2: All Semi Final and Final matches get TV bonus
  if (isKnockout) {
    homeBonus += 1000;
    awayBonus += 1000;
  }

  return {
    home: homeBonus,
    away: awayBonus
  };
}





// Enable simulate button only when inputs are valid
function enableSimulateButton() {
  const homeSelected = teamSelectHome.value !== "Select Team";
  const awaySelected = teamSelectAway.value !== "Select Team";
  const roundSelected = roundSelect.value !== "Select Round";

  const simulateButton = document.getElementById('simulateButton');
  simulateButton.disabled = !(homeSelected && awaySelected && roundSelected);
}


