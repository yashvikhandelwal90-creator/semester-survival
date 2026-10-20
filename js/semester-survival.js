
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

  const events = [
    // YOUR MIT-SPECIFIC EVENTS 💀
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
    },

    // EXTRA COLLEGE EVENTS 😂
    {
      message: "Attendance at 75%. One more bunk and it's character development 😭",
      run: function () {
        attendance = Math.max(0, attendance - 2);
        energy = Math.max(0, energy - 5);
      }
    },
    {
      message: "Professor said 'this is important for the exam' for the 47th time 💀",
      run: function () {
        energy = Math.max(0, energy - 4);
      }
    },
    {
      message: "Surprise quiz announced. Preparation has left the chat 🤡",
      run: function () {
        cgpa = Math.max(0, cgpa - 0.2);
        energy = Math.max(0, energy - 8);
      }
    },
    {
      message: "Academic comeback loading... 📈🔥",
      run: function () {
        energy = Math.min(100, energy + 12);
        cgpa = Math.min(10, cgpa + 0.1);
      }
    },
    {
      message: "Group project update: apparently YOU are the group project 💀",
      run: function () {
        energy = Math.max(0, energy - 10);
      }
    },
    {
      message: "Maggi at midnight. Five-star dining unlocked 🍜✨",
      run: function () {
        energy = Math.min(100, energy + 8);
      }
    },
    {
      message: "DSA problem solved without looking at the solution. WHO ARE YOU?! 🔥",
      run: function () {
        energy = Math.min(100, energy + 10);
      }
    },
    {
      message: "Fixed one bug. Created four more. Balance restored ⚖️💀",
      run: function () {
        energy = Math.max(0, energy - 6);
      }
    },
    {
      message: "Endsem timetable released. Goodbye, sleep schedule 📅😭",
      run: function () {
        energy = Math.max(0, energy - 12);
      }
    },
    {
      message: "Assignment submitted two seconds before the deadline. WE TAKE THOSE 🫡",
      run: function () {
        energy = Math.min(100, energy + 10);
      }
    },
    {
      message: "Club work + DSA + assignments + attendance. Bro has 47 tabs open 😭",
      run: function () {
        energy = Math.max(0, energy - 8);
      }
    },
    {
      message: "THE CODE WORKED ON THE FIRST TRY?! CALL THE NEWS 🚨🔥",
      run: function () {
        energy = Math.min(100, energy + 12);
      }
    },
    {
      message: "Checked SLCM again. Marks haven't magically changed 💀",
      run: function () {
        energy = Math.max(0, energy - 3);
      }
    },
    {
      message: "Unexpected free period. Happiness.exe is running 🎉",
      run: function () {
        energy = Math.min(100, energy + 10);
      }
    },
    {
      message: "Full night's sleep achieved. Rare legendary drop 🛌✨",
      run: function () {
        energy = Math.min(100, energy + 20);
      }
    },
    {
      message: "You went to study and somehow ended up scrolling for an hour 📱💀",
      run: function () {
        energy = Math.max(0, energy - 4);
      }
    },
    {
      message: "Wi-Fi works perfectly... until the assignment upload starts 📶🤡",
      run: function () {
        energy = Math.max(0, energy - 5);
      }
    },
    {
      message: "You understand the lecture, but the exam question looks extraterrestrial 👽😭",
      run: function () {
        energy = Math.max(0, energy - 6);
      }
    },
    {
      message: "FEST NIGHT! Main character energy activated 🎉🔥",
      run: function () {
        energy = Math.min(100, energy + 15);
      }
    },
    {
      message: "One small assignment has somehow become an entire research project 💀",
      run: function () {
        energy = Math.max(0, energy - 7);
      }
    },
    {
      message: "You opened the LMS to check one thing and found three new assignments 💀",
      run: function () {
        energy = Math.max(0, energy - 5);
      }
    },
    {
      message: "Everyone found a partner for the lab except you 😭",
      run: function () {
        energy = Math.max(0, energy - 6);
      }
    },
    {
      message: "Your friend said they didn't study and scored 95% 🤡",
      run: function () {
        energy = Math.max(0, energy - 5);
      }
    },
    {
      message: "You finally understand pointers. C programming boss fight defeated 🫡🔥",
      run: function () {
        energy = Math.min(100, energy + 12);
      }
    },
    {
      message: "The assignment instructions are longer than the assignment itself 📄💀",
      run: function () {
        energy = Math.max(0, energy - 5);
      }
    },
    {
      message: "Made it to class on time. Attendance gods are smiling 🙏",
      run: function () {
        attendance = Math.min(100, attendance + 1);
        energy = Math.min(100, energy + 3);
      }
    },
    {
      message: "Your code works, but you have absolutely no idea why 😭",
      run: function () {
        energy = Math.max(0, energy - 3);
      }
    },
    {
      message: "The canteen food actually slaps today?! Rare campus W 🍽️🔥",
      run: function () {
        energy = Math.min(100, energy + 10);
      }
    },
    {
      message: "You made a to-do list instead of doing the things on it 📋🤡",
      run: function () {
        energy = Math.max(0, energy - 4);
      }
    },
    {
      message: "Someone mentions placements and everyone starts calculating CGPA 📈💀",
      run: function () {
        energy = Math.max(0, energy - 4);
      }
    },
    {
      message: "You survived a full day of classes. Victory screen unlocked 🏆",
      run: function () {
        energy = Math.min(100, energy + 10);
      }
    },
    {
      message: "You pushed code to GitHub and it actually deployed. DEVELOPER ARC UNLOCKED 🚀",
      run: function () {
        energy = Math.min(100, energy + 12);
      }
    }
  ];

  function updateDashboard(message) {
    attendanceEl.textContent = attendance + "%";
    energyEl.textContent = energy;
    cgpaEl.textContent = cgpa.toFixed(1);
    eventEl.textContent = message;
  }

  document.addEventListener("keydown", function (e) {
    const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    if (!arrowKeys.includes(e.key)) return;
    if (e.repeat) return;

    moves++;
    energy = Math.max(0, energy - 2);

    let message = "Move " + moves + ": Keep balancing your semester!";

    if (moves % 3 === 0) {
      const chosenEvent = events[Math.floor(Math.random() * events.length)];
      chosenEvent.run();
      message = chosenEvent.message;
    }

    updateDashboard(message);
  });

  updateDashboard("🚨 MIT MANIPAL SURVIVAL MODE 🚨 ITS DONE BRO. WE BALL. 💀");
  console.log("Semester Survival dashboard loaded!");
});
