fetch("players.json")
    .then(response => response.json())
    .then(players => {

        const history = document.getElementById("history-list");

        for (let i = 0; i < 30; i++) {

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