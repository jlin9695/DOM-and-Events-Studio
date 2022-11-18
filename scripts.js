// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function init () {

    let rocketPosX = 0;
    let rocketPosY = 0;
    let altitude = 0;
    const rocket = document.getElementById('rocket');
    const missionAbort = this.document.getElementById("missionAbort");
    const takeoff = this.document.getElementById("takeoff");
    const land = this.document.getElementById("landing");

    const status = this.document.getElementById("flightStatus");
    const background = this.document.getElementById("shuttleBackground");
    const height = this.document.getElementById("spaceShuttleHeight");

    const left = this.document.getElementById("left")
    const right = this.document.getElementById("right")
    const up = this.document.getElementById("up")
    const down = this.document.getElementById("down")

    takeoff.addEventListener('click', event => {
        let response = this.window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response) {
            status.innerHTML = "Shuttle in flight." 
            background.style.backgroundColor = "blue";
            altitude += 10000
            height.innerHTML = altitude;
        }
    })
    land.addEventListener("click", event => {
        let response = this.window.confirm("The shuttle is landing. Landing gear engaged.");
        if(response){
            status.innerHTML = "The shuttle has landed.";
            background.style.backgroundColor = "green";
            altitude = 0
            height.innerHTML = 0;
        }
    })
    missionAbort.addEventListener("click", event => {
        let response = this.window.confirm("Confirm that you want to abort the mission.");
        if(response){
            status.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "green";
            altitude = 0;
            height.innerHTML = 0;
        }
    })

    document.addEventListener('click', function(event){
        console.log(event.target.id);

        if(event.target.id === 'left'){
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px'
        }
        if(event.target.id === 'right'){
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px'
        }

        if(event.target.id === 'up'){
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px'
        }
        if(event.target.id === 'down'){
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px'
        }
    })

})