const pastUrl = "https://api.spacexdata.com/v4/launches/past";

const pastLaunch = document.querySelector("#past-launch");

function getDate(unixDate) {
    var date = new Date(unixDate * 1000);
    return date.toLocaleDateString('en-US', {day: "numeric", month: "long", year: "numeric"});
}

async function getPastLaunches() {

    try {
        const response = await fetch(pastUrl);
        const results = await response.json();
        console.log(results);
        const pastDetatils = results;

        pastLaunch.innerHTML = "";

        for (let i = 0; i < pastDetatils.length; i++) {

            let launchStatus = pastDetatils[i].success;

            if(launchStatus) {
                launchStatus = `<i class="fas fa-check"></i>&nbsp;&nbsp; Launch success`;        
            }
            else {
                launchStatus = `<i class="fas fa-times"></i> &nbsp;&nbsp; Launch failed`;
            }
            
            pastLaunch.innerHTML += `<div class="launch-card">
                                     <p><span class="flight-name">${pastDetatils[i].name}</span> </p>
                                            <p><i class="fas fa-rocket"></i> &nbsp;&nbsp;<span class="flight-number">Flight #${pastDetatils[i].flight_number}</span></p>
                                            <details>
                                                <summary>For more info:</summary>
                                                <p><i class="fas fa-calendar"></i> &nbsp;&nbsp;<span class="flight-date">Launch date: ${getDate(pastDetatils[i].date_unix)} </span></p>
                                                <p>${launchStatus}</p>  
                                                <p><i class="fas fa-user-astronaut"></i>&nbsp;&nbsp; Read more about ${pastDetatils[i].name}:
                                                    <a href="${pastDetatils[i].links.wikipedia}" title="Link for more information on Wikipedia">here</a>
                                                </p>
                                            </details>    
                                    </div> `;
        }
    } catch (error) {
        console.log("An error occurred");
        pastLaunch.innerHTML = displayError();
    }
}

getPastLaunches();






