Promise.all([
    fetch("players.json").then(r => r.json()),
    fetch("schedule.json").then(r => r.json())
])

.then(([players, schedule]) => {

   const now = new Date();

const today =
    now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, "0") + "-" +
    String(now.getDate()).padStart(2, "0");

    const todayEntry = schedule.find(item => item.date === today);

    if (!todayEntry) {

        document.getElementById("player-name").textContent = "No player scheduled.";

        return;

    }

    const player = players.find(
        p => p.id === todayEntry.player
    );

    document.getElementById("player-image").src = player.image;
    document.getElementById("player-name").textContent = player.name;

    if (document.getElementById("nickname")) {
        document.getElementById("nickname").textContent = player.nickname;
    }

    document.getElementById("position").textContent = player.position;
    document.getElementById("teams").textContent = player.teams;
    document.getElementById("years").textContent = player.years;

    document.getElementById("score").textContent = player.score + "/100";
    document.getElementById("score-bar").style.width = player.score + "%";

    let facts = document.getElementById("facts");
    facts.innerHTML = "";

    player.facts.forEach(function(fact) {

        let li = document.createElement("li");

        li.textContent = fact;

        facts.appendChild(li);

    });

});

const button = document.getElementById("toggle-info");
const text = document.getElementById("cult-text");

button.addEventListener("click", () => {

    text.classList.toggle("hidden");

    if (text.classList.contains("hidden")) {

        button.textContent = "ⓘ What is the Cult Hero Score?";

    } else {

        button.textContent = "▼ Hide Cult Hero Score Explanation";

    }

});