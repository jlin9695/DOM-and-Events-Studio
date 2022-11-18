// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function init () {
    
    const missionAbort = this.document.getElementById("missionAbort");
    const takeoff = this.document.getElementById("takeoff");
    const land = this.document.getElementById("landing");

    const status = this.document.getElementById("flightStatus");
    const background = this.document.getElementById("shuttleBackground");
    const height = this.document.getElementById("spaceShuttleHeight");

    takeoff.addEventListener('click', event => {
        this.window.confirm("Confirm that the shuttle is ready for takeoff.");
        status.innerHTML = "Shuttle in flight." 
        background.style.backgroundColor = "blue";
        height.innerHTML = "10000"
    })
})