const UpcomingUrl = "https://api.spacexdata.com/v4/launches/upcoming";

const upcomingLaunch = document.querySelector("#upcoming-launch");

function getDate(unixDate) {
    var date = new Date(unixDate * 1000);
    return date.toLocaleDateString('en-US', {day: "numeric", month: "long", year: "numeric"});
}

async function getUpcomingLaunches() {

    try {
        const response = await fetch(UpcomingUrl);
        const results = await response.json();
        //console.log(results);
        const upcomingDetails = results;

        upcomingLaunch.innerHTML = "";

        for (let i = 0; i < upcomingDetails.length; i++) {

            upcomingLaunch.innerHTML += `<div class="launch-card">
                                            <p><span class="flight-name">${upcomingDetails[i].name}</span> </p>
                                            <p><i class="fas fa-rocket"></i> &nbsp;&nbsp;<span class="flight-number">Flight #${upcomingDetails[i].flight_number}</span></p>
                                            <details>
                                                <summary>For more info:</summary>
                                                <p><i class="fas fa-calendar"></i> &nbsp;&nbsp;<span class="flight-date">Launch date: ${getDate(upcomingDetails[i].date_unix)}</span></p>
                                                <p><i class="fas fa-user-astronaut"></i>&nbsp;&nbsp; Read more about ${upcomingDetails[i].name}:
                                                    <a href="${upcomingDetails[i].links.wikipedia}" title="Link for more information on Wikipedia">here</a>
                                                </p>
                                            </details>  
                                        </div> `;
        }
    } catch (error) {
        console.log("An error occurred");
        upcomingLaunch.innerHTML = displayError();
    }
}

getUpcomingLaunches();




