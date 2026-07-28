const params = new URLSearchParams(window.location.search);
const playerId = params.get("id");

fetch("players.json")
.then(response => response.json())
.then(players => {

    const player = players.find(p => p.id === playerId);

    if (!player) {

        document.getElementById("player-name").textContent = "Player not found.";

        return;

    }

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