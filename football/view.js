function render(footballs) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Premier League</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="header">
            <h1 id="Top">Top 10</h1>
            <img id="Logo" src="./images/Premier-League.png" alt="Premier-League.jpg">
            <h1>Premier League</h1>
        </div>
        <div class="container">
            <table id="table">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Club</th>
                        <th>Played</th>
                        <th>Won</th>
                        <th>Drawn</th>
                        <th>Lost</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    ${footballs
                      .map(
                        (football) =>
                          `<tr>
                                <td>${football.Position}</td>
                                <td>${football.Club}</td>
                                <td>${football.Played}</td>
                                <td>${football.Won}</td>
                                <td>${football.Drawn}</td>
                                <td>${football.Lost}</td>
                                <td>${football.Points}</td>
                          </tr>`
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
        </body>
    </html>
    `;
}

module.exports = render;
