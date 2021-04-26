var pos = 0;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}
// Factory to make a PacMan at a random position with random velocity
function makePac() {
    // returns an object with random values scaled {x: 33, y: 21}
    let velocity = setToRandom(10); // {x:?, y:?}
    let position = setToRandom(10);
    // Add image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = './images/PacMan1.png';
    newimg.width = 100;
    let direction = 0;
    let counter = 0;
    //
    // set position here 
    //
    newimg.style.left = position.x+'px';
    newimg.style.top = position.y+'px';

    // add new Child image to game
    game.appendChild(newimg);
    // return details in an object
    return {
        position,
        velocity,
        direction,
        counter,
        newimg
    }
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        // Picture swap logic goes here
        if (item.direction == 0) {
            if (item.counter % 2 == 0) {
                item.newimg.src = 'images/PacMan1.png';
            } else {
                item.newimg.src = 'images/PacMan2.png';
            }
        } else {
            if (item.counter % 2 == 0) {
                item.newimg.src = 'images/PacMan3.png';
            } else {
                item.newimg.src = 'images/PacMan4.png';
            }
        }

        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
        item.counter += 1;
    })
    setTimeout(update, 100);
}

function checkCollisions(item) {
    //
    // detect collision with all walls and make pacman bounce
    //
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    if (item.position.x >= (windowWidth - 100)) {
        item.direction = 1;
        directionX = 1;
        item.velocity.x *= -1;
    } else if (item.position.x <= 0) {
            item.direction = 0;
            directionX = 0;
            item.velocity.x *= -1;
    }

    if (item.position.y >= (windowHeight - 100)) {
            directionY = 1;
            item.velocity.y *= -1;
    } else if (item.position.y <= 0) {
            directionY = 0;
            item.velocity.y *= -1;
        }
}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}