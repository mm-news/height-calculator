function tan(theta) {
    return Math.tan(Math.PI * (theta / 180));
}

var ang_1 = document.getElementById("theta1").value;
var ang_2 = document.getElementById("theta2").value;
var dist = document.getElementById("d").value;

function update_ans() {
    document.getElementById("ans").innerHTML = calculate_height(ang_1, ang_2, dist);
}

function calculate_height(ang_1, ang_2, dist) {
    return (dist * (tan(ang_1) ** 2)) / (tan(ang_2) - tan(ang_1));
}