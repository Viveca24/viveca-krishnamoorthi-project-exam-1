// https://www.w3schools.com/howto/howto_js_countdown.asp
// USED AS GUIDE TO CREATE A COUNTDOWN TIMER

const nextLaunchUrl = "https://api.spacexdata.com/v4/launches/next";

async function getNextLaunch() {

    try {
        const response = await fetch(nextLaunchUrl);
        const nextLaunch = await response.json();
        displayNextLaunchTimer(nextLaunch);
    } catch (error) {
        console.error(error);
    }
}

getNextLaunch();

function displayNextLaunchTimer(nextLaunch) {

    var countDownDate = new Date(nextLaunch.date_local).getTime();

    var x = setInterval(function () {

      var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `<tr id="countdown-text">
                                                            <th>DAYS</th>
                                                            <th>HOURS</th>
                                                            <th>MINUTES</th>
                                                            <th>SECONDS</th>
                                                          </tr>
                                                          <tr id="coundown-numbers">
                                                            <th>${days}</th>
                                                            <th>${hours}</th>
                                                            <th>${minutes}</th>
                                                            <th>${seconds}</th>
                                                          </tr>
                                                          `;

        document.querySelector(".countdown-container").className += " opacity-overlay";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "TO BE UPDATED";
          }
        }, 1000);
}