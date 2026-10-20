
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

  // MIT MANIPAL MEMES
  // One of these is guaranteed to appear every 3 moves.
  const mitEvents = [
    {
      message: "ITS DONE BRO. WE BALL. 💀",
      run: function () {
        energy = Math.max(0, energy - 2);
      }
    },
    {
      message: "Had food at BD. Energy -10. We move anyway 🍽️💀",
      run: function () {
        energy = Math.max(0, energy - 10);
      }
    },
    {
      message: "WHY IS EVERYTHING OVERLAPPING?! 💀😭",
      run: function () {
        energy = Math.max(0, energy - 5);
      }
    },
    {
      message: "WHY DOES THE INTERNET NOT WORK HERE?! Wi-Fi said 'skill issue' 📶😭",
      run: function () {
        energy = Math.max(0, energy - 8);
      }
    },
    {
      message: "FALAK EVENT 🎉 Free serotonin unlocked! Energy +15!",
      run: function () {
        energy = Math.min(100, energy + 15);
      }
    },
    {
      message: "FALAK memories hit different 🥹✨ Energy +10!",
      run: function () {
        energy = Math.min(100, energy + 10);
      }
    },
    {
      message: "FALAK FEST MODE 🔥 Forget assignments. Energy +8!",
      run: function () {
        energy = Math.min(100, energy + 8);
      }
    },
    {
      message: "Assignment due at 11:59 PM. It's 11:57 PM. ITS DONE BRO 😭",
      run: function () {
        energy = Math.max(0, energy - 10);
      }
    },
    {
      message: "Lab viva tomorrow. Suddenly you don't know what a variable is 💀",
      run: function () {
        energy = Math.max(0, energy - 7);
      }
    },
    {
      message: "You opened one coding error. Now there are 17. Character development 🤡",
      run: function () {
        energy = Math.max(0, energy - 5);
      }
    }
  ];

  // GENERIC COLLEGE EVENTS
  const collegeEvents = [
    {
      message: "Surprise quiz! CGPA -0.2 📉",
      run: function () {
        cgpa = Math.max(0, cgpa - 0.2);
      }
    },
    {
      message: "Assignment deadline! Energy -15 📚",
      run: function () {
        energy = Math.max(0, energy - 15);
      }
    },
    {
      message: "Late to class! Attendance -3% 🏃",
      run: function () {
        attendance = Math.max(0, attendance - 3);
      }
    },
    {
      message: "Great quiz! CGPA +0.1 🎯",
      run: function () {
        cgpa = Math.min(10, cgpa + 0.1);
      }
    },
    {
      message: "Break time! Energy +10 ☕",
      run: function () {
        energy = Math.min(100, energy + 10);
      }
    },
    {
      message: "Academic comeback arc begins 📈",
      run: function () {
        cgpa = Math.min(10, cgpa + 0.1);
      }
    },
    {
      message: "Group project meeting. Nobody knows what's happening 🤝",
      run: function () {
        energy = Math.max(0, energy - 4);
      }
    },
    {
      message: "Maggi break! A little happiness 🍜",
      run: function () {
        energy = Math.min(100, energy + 8);
      }
    },
    {
      message: "DSA practice completed. One step closer to placements 💻",
      run: function () {
        energy = Math.max(0, energy - 2);
      }
    },
    {
      message: "Bug fixed! You have earned your developer badge 🐛",
      run: function () {
        energy = Math.min(100, energy + 5);
      }
    },
    {
      message: "Endsem season is approaching. Lock in 📖",
      run: function () {
        energy = Math.max(0, energy - 5);
      }
    },
    {
      message: "Assignment submitted before the deadline! Rare W ✅",
      run: function () {
        energy = Math.min(100, energy + 5);
      }
    },
    {
      message: "Club work and academics fighting for your time 😭",
      run: function () {
        energy = Math.max(0, energy - 4);
      }
    },
    {
      message: "Your project is live on GitHub Pages! 🚀",
      run: function () {
        energy = Math.min(100, energy + 5);
      }
    },
    {
      message: "SLCM is testing your patience again 💀",
      run: function () {
        energy = Math.max(0, energy - 3);
      }
    },
    {
      message: "Free period unlocked! Enjoy it while it lasts 🎉",
      run: function () {
        energy = Math.min(100, energy + 10);
      }
    },
    {
      message: "You got enough sleep. Productivity buff activated 😴",
      run: function () {
        energy = Math.min(100, energy + 12);
      }
    },
    {
      message: "Wi-Fi finally cooperated. Upload successful 📶",
      run: function () {
        energy = Math.min(100, energy + 3);
      }
    },
    {
      message: "The exam question looks like it came from another planet 👽",
      run: function () {
        energy = Math.max(0, energy - 6);
      }
    },
    {
      message: "Fest night! Memories over deadlines for a moment 🎉",
      run: function () {
        energy = Math.min(100, energy + 8);
      }
    },
    {
      message: "Research project progress unlocked 🔬",
      run: function () {
        energy = Math.max(0, energy - 2);
      }
    },
    {
      message: "LMS says you have more assignments. Of course it does 🤡",
      run: function () {
        energy = Math.max(0, energy - 5);
      }
    },
    {
      message: "Your lab partner actually showed up. Legendary 🤝",
      run: function () {
        energy = Math.min(100, energy + 5);
      }
    },
    {
      message: "Your friend got 95%. Happy for them. Totally fine. 😭",
      run: function () {
        energy = Math.max(0, energy - 2);
      }
    },
    {
      message: "Pointers have entered the chat. Good luck 💀",
      run: function () {
        energy = Math.max(0, energy - 3);
      }
    },
    {
      message: "The instructions are longer than the assignment itself 📄",
      run: function () {
        energy = Math.max(0, energy - 2);
      }
    },
    {
      message: "You reached class on time! Attendance +1% 🎯",
      run: function () {
        attendance = Math.min(100, attendance + 1);
      }
    },
    {
      message: "The code works, but you have no idea why 🤡",
      run: function () {
        energy = Math.min(100, energy + 3);
      }
    },
    {
      message: "Canteen food acquired. Surviving another day 🍽️",
      run: function () {
        energy = Math.min(100, energy + 5);
      }
    },
    {
      message: "You finished something on your to-do list. Small victory ✅",
      run: function () {
        energy = Math.min(100, energy + 5);
      }
    },
    {
      message: "Placements are coming. CGPA and DSA, let's go 💻",
      run: function () {
        energy = Math.max(0, energy - 2);
      }
    },
    {
      message: "You survived another college day. That's a win 🫡",
      run: function () {
        energy = Math.min(100, energy + 5);
      }
    }
  ];

  function updateDashboard(message) {
    attendanceEl.textContent = attendance + "%";
    energyEl.textContent = energy;
    cgpaEl.textContent = cgpa.toFixed(1);
    eventEl.textContent = message;
  }
window.addEventListener("tileMerged", function (e) {
  const value = e.detail.value;

  energy = Math.min(100, energy + 2);

  if (value >= 16) {
    cgpa = Math.min(10, cgpa + 0.1);
  }

  updateDashboard(
    "🔥 Merge! " + value + " tile unlocked! Energy +2" +
    (value >= 16 ? " | CGPA +0.1" : "")
  );
});
  document.addEventListener("keydown", function (e) {
    if (
      !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)
    ) {
      return;
    }

    if (e.repeat) return;

    moves++;
    energy = Math.max(0, energy - 2);

    let message = "Move " + moves + ": Keep balancing your semester! 🎓";

    // Every third arrow-key press triggers an MIT-specific meme.
    if (moves % 3 === 0) {
      const event =
        mitEvents[Math.floor(Math.random() * mitEvents.length)];

      event.run();
      message = event.message;
    }

    updateDashboard(message);
  });

  updateDashboard("🚨 MIT MANIPAL SURVIVAL MODE 🚨 ITS DONE BRO. WE BALL. 💀");

  console.log("Semester Survival dashboard loaded.");
});
