const launchDate = new Date("2026-07-18");
const today = new Date();

const daysSinceLaunch = Math.floor(
    (today - launchDate) / (1000 * 60 * 60 * 24)
) + 1;


fetch("players.json")
    .then(response => response.json())
    .then(players => {

        const history = document.getElementById("history-list");

        for (let i = 0; i < daysSinceLaunch; i++) {

            const date = new Date();
            date.setDate(date.getDate() - i);

            const number = date.getDate() + date.getMonth();

            const player = players[number % players.length];

            history.innerHTML += `
                <div class="history-card">

                    <img src="${player.image}" width="80">

                    <div>

                        <strong>${date.toDateString()}</strong><br>

                        ${player.name}<br>

                        Cult Hero Score: ${player.score}

                    </div>

                </div>

                <hr>
            `;

        }

    });