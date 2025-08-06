let number = 0;
let clicks = 1;
let upg1cost = 5;
let upg2cost = 100;
let upg3cost = 20;
let upg3time = 1000;
let upg3purchased = false;

document.getElementById("button").addEventListener("click", function() {
    let header = document.getElementById("header");
    number+=clicks;
    header.textContent = String(number);
});

document.getElementById("upg1").addEventListener("click", function() {
    if (number >= upg1cost) {
        number -= upg1cost;
        clicks += 1;
        document.getElementById("header").textContent = String(number);
        upg1cost *= 2;
        document.getElementById("upg1").textContent = `1+ Clicks per click cost: ${upg1cost}`;
    } else {
        alert("Not enough clicks");
    }
})

document.getElementById("upg2").addEventListener("click", function() {
    if (number >= upg2cost) {
        number -= upg2cost;
        clicks *= 2;
        upg2cost *= 10;
        document.getElementById("header").textContent = String(number);
        document.getElementById("upg2").textContent = `2x Clicks per click cost: ${upg2cost}`;
    } else {
        alert("Not enough clicks");
    }
});

document.getElementById("upg3").addEventListener("click", function() {
    if (number >= upg3cost && upg3purchased === false) {
        number -= upg3cost;
        number = number;
        upg3purchased = true;
        document.getElementById("upg3").textContent = "purchased";
        setInterval(function() {
            number += clicks;
            document.getElementById("header").textContent = String(number);
        }, upg3time);
    } else {
        alert("Not enough clicks, or already purchased");
    }
});
