fetch("players.json")
.then(response => response.json())
.then(players => {

    let today = new Date();

    let number = today.getDate() + today.getMonth();

    let player = players[number % players.length];

    document.getElementById("player-image").src = player.image;
    document.getElementById("player-name").textContent = player.name;
    document.getElementById("position").textContent = player.position;
    document.getElementById("teams").textContent = player.teams;
    document.getElementById("years").textContent = player.years;
    document.getElementById("score").textContent = player.score + "/100";
    document.getElementById("score-bar").style.width = player.score + "%";

    let facts = document.getElementById("facts");

    player.facts.forEach(function(fact){
        let li = document.createElement("li");
        li.textContent = fact;
        facts.appendChild(li);
    });

});