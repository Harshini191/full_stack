function calculateFare(km) {
    let fare = 0;

    if (km <= 4) {
        fare = 30;  
    } else if (km <= 9) {
        fare = 30 + (km - 4) * 10;  
    } else if (km <= 19) {
        fare = 30 + (5 * 10) + (km - 9) * 15;  
    } else {
        fare = 30 + (5 * 10) + (10 * 15) + (km - 19) * 20; 
    }

    return fare;
}

let distance = 19.5;
console.log("Total fare for " + distance + " km = Rs." + calculateFare(distance));
