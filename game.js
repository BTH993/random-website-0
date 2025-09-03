let number = 0;
let clicks = 1;
let upg1cost = 5;
let upg2cost = 100;
let upg3cost = 20;
let upg3time = 1000;
let upg3purchased = false;
let upg4cost = 250;
let upg3;
let upg5cost = 5000;
let upg6 = false;
let rebirths = 1;

function updateHeader() {
    document.getElementById("header").textContent = String(number);
}

document.getElementById("button").addEventListener("click", function() {
    number += clicks;
    updateHeader();
});

document.getElementById("upg1").addEventListener("click", function() {
    if (number >= upg1cost) {
        number -= upg1cost;
        clicks += 1;
        updateHeader();
        if (rebirths > 1) {
            upg1cost = Math.floor(upg1cost * 1.5);
        } else {
            upg1cost *= 2;
        }
        document.getElementById("upg1").textContent = `1+ Clicks per click cost: ${upg1cost}`;
    } else {
        alert("Not enough clicks");
    }
});

document.getElementById("upg2").addEventListener("click", function() {
    if (number >= upg2cost) {
        number -= upg2cost;
        clicks *= 2;
        upg2cost *= 10 / rebirths;
        upg2cost = Math.floor(upg2cost);
        updateHeader();
        document.getElementById("upg2").textContent = `2x Clicks per click cost: ${upg2cost}`;
    } else {
        alert("Not enough clicks");
    }
});

document.getElementById("upg3").addEventListener("click", function() {
    if (number >= upg3cost && !upg3purchased) {
        number -= upg3cost;
        upg3purchased = true;
        document.getElementById("upg3").textContent = "purchased";
        upg3 = setInterval(function() {
            number += clicks;
            updateHeader();
        }, upg3time);
        updateHeader();
    } else {
        alert("Not enough clicks, or already purchased");
    }
});

document.getElementById("upg4").addEventListener("click", function() {
    if (number >= upg4cost && upg3purchased && upg3time >= 250) {
        clearInterval(upg3);
        document.getElementById("upg3").textContent = "repurchase for upgrade";
        upg3purchased = false;
        number -= upg4cost / rebirths;
        number = Math.floor(number);
        upg3time /= 2;
        if (upg3time <= 250) {
            upg3time = 250;
            document.getElementById("upg4").textContent = "maxed out";
        } else {
            upg4cost *= 4 / rebirths;
            upg4cost = Math.floor(upg4cost);
            document.getElementById("upg4").textContent = `speed up auto clicker cost: ${upg4cost}`;
        }
        updateHeader();
    } else {
        alert("Not enough clicks, or auto clicker not purchased, or already at max speed");
    }
});

document.getElementById("upg5").addEventListener("click", function() {
    if (number >= upg5cost) {
        number -= upg5cost;
        clicks *= 3 * rebirths;
        clicks = Math.floor(clicks);
        updateHeader();
        upg5cost *= 10 / rebirths;
        upg5cost = Math.floor(upg5cost);
        document.getElementById("upg5").textContent = `3x Clicks per click cost: ${upg5cost}`;
    } else {
        alert("Not enough clicks");
    }
});

document.getElementById("upg6").addEventListener("click", function() {
    if (number >= 9999 && upg3purchased && !upg6) {
        upg6 = true;
        clearInterval(upg3);
        document.getElementById("upg3").textContent = "repurchase for upgrade";
        upg3purchased = false;
        number -= 9999;
        upg3time = Math.round(100 / rebirths);
        updateHeader();
        document.getElementById("upg6").textContent = "maxed out";
    } else {
        alert("Not enough clicks, or auto clicker not purchased");
    }
});

document.getElementById("rebirth").addEventListener("click", function() {
    if (number >= 99999) {
        rebirths += 1;
        number = 0;
        clicks = rebirths;
        upg1cost = 5;
        upg2cost = 100;
        upg3cost = 20;
        upg3time = 1000;
        upg3purchased = false;
        upg4cost = 250;
        upg5cost = 5000;
        upg6 = false;
        clearInterval(upg3);
        document.getElementById("upg1").textContent = `1+ Clicks per click cost: ${upg1cost}`;
        document.getElementById("upg2").textContent = `2x Clicks per click cost: ${upg2cost}`;
        document.getElementById("upg3").textContent = `Auto Clicker cost: ${upg3cost}`;
        document.getElementById("upg4").textContent = `speed up auto clicker cost: ${upg4cost}`;
        document.getElementById("upg5").textContent = `3x Clicks per click cost: ${upg5cost}`;
        document.getElementById("upg6").textContent = "auto clicker speed = 0.1 second cost: 9999";
        document.getElementById("rebirth").textContent = "rebirth cost: 99999";
        updateHeader();
    } else {
        alert("Not enough clicks");
    }
});
