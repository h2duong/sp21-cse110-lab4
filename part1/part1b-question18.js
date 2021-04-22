function dates() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}


var intervalID = setInterval(dates, 1000);