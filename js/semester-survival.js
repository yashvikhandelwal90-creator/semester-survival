
(function () {
  var attendance = 85;
  var energy = 100;
  var cgpa = 9.0;
  var moves = 0;
  var gameEnded = false;

  var events = [
    {
      message: "Surprise quiz! CGPA -0.2",
      run: function () {
        cgpa = Math.max(0, cgpa - 0.2);
      }
    },
    {
      message: "Assignment deadline! Energy -15",
      run: function () {
        energy = Math.max(0, energy - 15);
      }
    },
    {
      message: "All-nighter! Attendance -3%, Energy -10",
      run: function () {
        attendance = Math.max(0, attendance - 3);
        energy = Math.max(0, energy - 10);
      }
    },
    {
      message: "Great quiz! CGPA +0.1",
      run: function () {
        cgpa = Math.min(10, cgpa + 0.1);
      }
    },
    {
      message: "Break time! Energy +10",
      run: function () {
        energy = Math.min(100, energy + 10);
      }
    }
  ];

  function updateDashboard(message) {
    document.getElementById("attendance").textContent = attendance + "%";
    document.getElementById("energy").textContent = energy;
    document.getElementById("cgpa").textContent = cgpa.toFixed(1);
    document.getElementById("college-event").textContent = message;
  }

  function handleMove(event) {
    var keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    if (keys.indexOf(event.key) === -1) return;
    if (event.repeat || gameEnded) return;

    moves++;
    energy = Math.max(0, energy - 2);

    var message = "Move " + moves + ": Keep balancing your semester!";

    if (moves % 3 === 0) {
      var collegeEvent = events[Math.floor(Math.random() * events.length)];
      collegeEvent.run();
      message = collegeEvent.message;
    }

    if (energy === 0 || attendance < 50 || cgpa < 5) {
      gameEnded = true;
      message = "Semester failed! Refresh to try again.";
    }

    updateDashboard(message);
  }

  document.addEventListener("keydown", handleMove, true);
  updateDashboard("Welcome to the semester! Make your first move.");
})();
