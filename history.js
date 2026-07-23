const launchDate = new Date("2026-07-20");
const today = new Date();

const daysSinceLaunch = Math.floor(
    (today - launchDate) / (1000 * 60 * 60 * 24)
) + 1;


Promise.all([
    fetch("players.json").then(r => r.json()),
    fetch("schedule.json").then(r => r.json())
])

.then(([players, schedule]) => {

    const history = document.getElementById("history-list");

    history.innerHTML = "";

    for (let i = 0; i < daysSinceLaunch; i++) {

        const date = new Date();
        date.setDate(date.getDate() - i);

       const dateString = 
    date.getFullYear() + "-" +
    String(date.getMonth() + 1).padStart(2, "0") + "-" +
    String(date.getDate()).padStart(2, "0");

        const entry = schedule.find(
            item => item.date === dateString
        );

        if (!entry) {
            continue;
        }

        const player = players.find(
            p => p.id === entry.player
        );

        if (!player) {
            continue;
        }

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