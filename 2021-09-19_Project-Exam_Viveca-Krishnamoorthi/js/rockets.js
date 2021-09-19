const rocketsUrl = "https://api.spacexdata.com/v4/rockets";

const rockets = document.querySelector("#rockets");

async function getRockets() {

    try {
        const response = await fetch(rocketsUrl);
        const results = await response.json();
        //console.log(results);
        const rocketDetail = results;

        rockets.innerHTML = "";

        for (let i = 0; i < rocketDetail.length; i++) {

            if (!rocketDetail[i].active) {
                continue;
            }

            rockets.innerHTML += `<div class="rocket-card">
                                    <div class="rocket-box">
                                        <div class="rocket-image">
                                            <img src="${rocketDetail[i].flickr_images}" alt="picture of rockets">
                                        </div>
                                        <div class="rocket-description">
                                            <div class="rocket-description_info">
                                                <h2> ${rocketDetail[i].name} </h2>
                                                <p>${rocketDetail[i].description}</p>
                                                <p><span class="space">Read more about ${rocketDetail[i].name}
                                                    <a href="https://en.wikipedia.org/wiki/${rocketDetail[i].name}" title="link to more information about the rockets on Wikipedia"> here</a>
                                                </span></p>
                                            </div>
                                            <div class="rocket-text">
                                                <p><b>First flight:</b> <span>${rocketDetail[i].first_flight}</span></p>
                                                <p><b>Cost per launch:</b> <span>$${rocketDetail[i].cost_per_launch}</span></p>
                                                <p><b>Height:</b> <span>${rocketDetail[i].height.meters} m </span></p>
                                                <p><b>Diameter:</b> <span>${rocketDetail[i].diameter.meters} m</span></p>
                                                <p><b>Mass:</b> <span>${rocketDetail[i].mass.kg} kg</span></p>
                                            </div>
                                        </div>
                                    </div>                                    
                                  </div> `;
        }
    } catch (error) {
        console.log("An error occurred");
        rockets.innerHTML = displayError();
    }
}

getRockets();




