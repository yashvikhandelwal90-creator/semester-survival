
document.addEventListener("DOMContentLoaded", function () {
  let attendance = 85;
  let energy = 100;
  let cgpa = 9.0;
  let moves = 0;

  const attendanceEl = document.getElementById("attendance");
  const energyEl = document.getElementById("energy");
  const cgpaEl = document.getElementById("cgpa");
  const eventEl = document.getElementById("college-event");

  if (!attendanceEl || !energyEl || !cgpaEl || !eventEl) {
    console.error("Semester Survival: dashboard elements missing.");
    return;
  }

  function updateDashboard(message) {
    attendanceEl.textContent = attendance + "%";
    energyEl.textContent = energy;
    cgpaEl.textContent = cgpa.toFixed(1);
    eventEl.textContent = message;
  }

  document.addEventListener("keydown", function (e) {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      return;
    }

    if (e.repeat) return;

    moves++;
    energy = Math.max(0, energy - 2);

    let message = "Move " + moves + ": Keep balancing your semester!";

    if (moves % 3 === 0) {
      const events = [
        function () {
          cgpa = Math.max(0, cgpa - 0.2);
          return "Surprise quiz! CGPA -0.2";
        },
        function () {
          energy = Math.max(0, energy - 15);
          return "Assignment deadline! Energy -15";
        },
        function () {
          attendance = Math.max(0, attendance - 3);
          return "Late to class! Attendance -3%";
        },
        function () {
          cgpa = Math.min(10, cgpa + 0.1);
          return "Great quiz! CGPA +0.1";
        },
        function () {
          energy = Math.min(100, energy + 10);
          return "Break time! Energy +10";
        }
      ];

      message = events[Math.floor(Math.random() * events.length)]();
    }

    updateDashboard(message);
  });

  updateDashboard("Welcome to the semester! Make your first move.");
  console.log("Semester Survival dashboard loaded.");
});
