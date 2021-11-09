const speedLimit = 70;
const kmPerPoint = 5;

function checkSpeed(curSpeed) {
    if (curSpeed < speedLimit) {
        return 'Good Safe Driving';
    } else {
        const pelnatyPoint = Math.floor((curSpeed - speedLimit) / kmPerPoint);
        if (pelnatyPoint < 10) {
            return ('Speed Limit Cross By Pelnaty Point: ' + pelnatyPoint);
        } else {
            return 'License Suspended';
        }
    }
}

let checkSpeed1 = checkSpeed(50);
console.log(checkSpeed1);

let checkSpeed2 = checkSpeed(90);
console.log(checkSpeed2);

let checkSpeed3 = checkSpeed(120);
console.log(checkSpeed3);

let checkSpeed4 = checkSpeed(130);
console.log(checkSpeed4);