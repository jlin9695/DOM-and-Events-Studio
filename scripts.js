// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function init () {
    
    const missionAbort = this.document.getElementById("missionAbort")
    const takeoff = this.document.getElementById("takeoff")
    const land = this.document.getElementById("landing")

    const status = this.document.getElementById("flightStatus")


    takeoff.addEventListener('click', event => {
        this.window.confirm("Confirm that the shuttle is ready for takeoff.")
    })
})