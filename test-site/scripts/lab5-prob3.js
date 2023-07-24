for (let i = 1; i <= 16; i++) {
    let myDiv = document.createElement('div');
    document.body.append(myDiv);
}

function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange() {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndCol;
}

var divs = document.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {
    divs[i].onclick = function(e) {
        if (i % 2 == 0) {
            e.target.style.backgroundColor = bgChange();
        } else {
            e.target.style.backgroundColor = 'yellow';
        }
    }
}