const companyInfo = "https://api.spacexdata.com/v4/company";

const about = document.querySelector("#about-info");

async function getAboutCompany() {

    try {
        const response = await fetch(companyInfo);
        const aboutDetail = await response.json();
        //console.log(aboutDetail);

        newHtml(aboutDetail);

    } catch (error) {
        console.log(error);
    }
}

getAboutCompany();


function newHtml(aboutDetail) {

    about.innerHTML = `<div class="about-card">
                                <div class="about-spacex">
                                    <p class="about-text"> Founded by ${aboutDetail.founder}</p>
                                    <p>${aboutDetail.summary}</p>
                                </div>
                                <div class="about-facts">
                                    <div class="about-facts_left">
                                        <p> Employees</p>
                                        <p> Vehicles </p>
                                        <p> Launch sites </p>
                                        <p> Test sites </p>
                                    </div>
                                    <div class="about-facts_right">  
                                        <p>${aboutDetail.employees}</p>
                                        <p>${aboutDetail.vehicles}</p>
                                        <p>${aboutDetail.launch_sites}</p>
                                        <p>${aboutDetail.test_sites}</p>
                                    </div>
                                </div>
                                <div class="about-value">  
                                    <h4>Valuation</h4>
                                    <p>$${aboutDetail.valuation}</p>
                                </div>
                                <div class="about-location">
                                    <div class="about-address">
                                        <h4>SPACEX HEADQUARTERS: </h4>
                                        <p>${aboutDetail.headquarters.address}, ${aboutDetail.headquarters.city}, ${aboutDetail.headquarters.state} </p>
                                    </div>
                                    <div class="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.792001689701!2d-118.33021328478834!3d33.920752480641944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5dee46db32d%3A0x5589bf4232c10232!2sSpacex!5e0!3m2!1sno!2sno!4v1629815436404!5m2!1sno!2sno" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                    </div>     
                                </div>                                
                            </div>`;
}
