//video elements
var runwayloop = document.getElementById('runway-loop');
var runwaycloud = document.getElementById('runway-cloud');
var cloudloop = document.getElementById('cloud-loop');
var cloudrunway = document.getElementById('cloud-runway');
var landfreeze = document.getElementById('land-freeze');

//audio elements
var taxi = document.getElementById("taxi");
var onboardannouncement = document.getElementById("onboard-announcement");
var takeoff = document.getElementById('takeoff');
var takeoffannouncement = document.getElementById('takeoff-announcement');
var inflight = document.getElementById('inflight');
var landing = document.getElementById('landing');
var landingannouncement = document.getElementById('landing-announcement');
var seatbelton = document.getElementById('seatbelt-on');
var seatbeltoff = document.getElementById('seatbelt-off');
var turbulenceannouncement = document.getElementById('turbulence-announcement');
var bathroomon = document.getElementById('bathroom-on');
var bathroomoff = document.getElementById('bathroom-off');

//toggles
var seatbeltsign = false;
var bathroomsign = false;
var intheair = false;

function startFunction() {
    //video elements
    runwayloop.play();
    //audio elements
    taxi.play();
    setTimeout(() => {
        onboardannouncement.play();
    }, 3000)
}

function launchFunction() {
    if (intheair == false) {
        //toggle
        intheair = true;
        //audio elements
        taxi.pause();
        onboardannouncement.pause();
        takeoff.play();
        setTimeout(() => {
            takeoffannouncement.play();
        }, 500)
        setTimeout(() => {
            takeoff.pause();
            inflight.play();
        }, 38000)
        //video elements
        setTimeout(() => {
            runwaycloud.play();
            runwaycloud.style.visibility = "visible";
        }, 3000)
        setTimeout(() => {
            runwayloop.pause();
            runwayloop.style.visibility = "hidden";
        }, 4000)
        setTimeout(() => {
            cloudloop.play();
            cloudloop.style.visibility = "visible";
        }, 37000)
        setTimeout(() => {
            runwaycloud.pause();
            runwaycloud.style.visibility = "hidden";
        }, 38000)
    }

}

function landFunction() {
    if (intheair == true) {
        // toggle
        intheair = false;
        //audio elements
        inflight.pause();
        cloudloop.play();
        landing.play();
        setTimeout(() => {
            landingannouncement.play();
        }, 1000)
        //video elements
        setTimeout(() => {
            cloudrunway.play();
            cloudrunway.style.visibility = "visible";
        }, 11000)
        setTimeout(() => {
            cloudloop.pause();
            cloudloop.style.visibility = "hidden";
        }, 11000)
        setTimeout(() => {
            landfreeze.play();
            landfreeze.style.visibility = "visible";
        }, 26000)
        setTimeout(() => {
            cloudrunway.play();
            cloudrunway.style.visibility = "hiddden";
        }, 27000)
    }
}

function seatbeltFunction() {
    if (intheair == true) {
        if (seatbeltsign == false) {
            turbulenceannouncement.play();
            setTimeout(() => {
                seatbelton.play();
                seatbeltsign = true;
            }, 15000)
        }
        else if (seatbeltsign == true) {
            setTimeout(() => {
                seatbeltoff.play();
                seatbeltsign = false;
            }, 1000)
        }
    }
    else if (intheair == false) {
        if (seatbeltsign == false) {
            setTimeout(() => {
                seatbelton.play();
                seatbeltsign = true;
            }, 1000)
        }
        else if (seatbeltsign == true) {
            setTimeout(() => {
                seatbeltoff.play();
                seatbeltsign = false;
            }, 1000)
        }
    }

}

function bathroomFunction() {
    if (bathroomsign == false) {
        setTimeout(() => {
            bathroomon.play();
            bathroomsign = true;
        }, 1000)
    }
    else if (bathroomsign == true) {
        setTimeout(() => {
            bathroomoff.play();
            bathroomsign = false;
        }, 1000)
    }
}

