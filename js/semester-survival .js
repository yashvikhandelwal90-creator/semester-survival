
var attendance = 85;
var energy = 100;
var cgpa = 9.0;
var moves = 0;
var gameEnded = false;

var events = [
  {
    message: "📝 Surprise quiz! Your CGPA takes a hit.",
    effect: function () {
      cgpa = Math.max(0, cgpa - 0.2);
    }
  },
  {
    message: "📚 Assignment deadline! You lose energy.",
    effect: function () {
      energy = Math.max(0, energy - 15);
    }
  },
  {
    message: "🌙 All-nighter! Attendance suffers.",
    effect: function () {
      attendance = Math.max(0, attendance - 3);
      energy = Math.max(0, energy - 10);
    }
  },
  {
    message: "🎉 Great quiz score! Your CGPA improves.",
    effect: function () {
      cgpa = Math.min(10, cgpa + 0.1);
    }
  },
  {
    message: "☕ You took a break. Energy restored!",
    effect: function () {
      energy = Math.min(100, energy + 10);
    }
  }
];

function updateDashboard(message) {
  document.getElementById("attendance").textContent =
    attendance + "%";

  document.getElementById("energy").textContent = energy;

  document.getElementById("cgpa").textContent =
    cgpa.toFixed(1);

  document.getElementById("college-event").textContent =
    message;
}

document.addEventListener("keydown", function (event) {
  var keys = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
  ];

  if (!keys.includes(event.key) || event.repeat || gameEnded) {
    return;
  }

  moves++;
  energy = Math.max(0, energy - 2);

  var message = "📖 Move " + moves +
    ": Keep balancing your semester!";

  if (moves % 3 === 0) {
    var randomEvent =
      events[Math.floor(Math.random() * events.length)];

    randomEvent.effect();
    message = randomEvent.message;
  }

  updateDashboard(message);

  if (energy === 0 || attendance < 50 || cgpa < 5) {
    gameEnded = true;

    updateDashboard(
      "💀 Semester failed! Refresh the page to try again."
    );
  }
},true);
