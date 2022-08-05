let demo;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    demo = new Demo();
}

function draw() {
    push();
    background(51);
    pop();

    run();
}

const run = () => {
    // RUN objects here
    demo.run();

    renderText();
}

const renderText = () => {
    // Render text at the bottom left of the screen.
    const textLabel = [
        `Framerate : ${frameRate().toFixed(0)}`,
    ];
    push();
    fill('#FFF');
    textLabel.reverse().forEach((e, i) => { text(e, 10, height - (13 * (i + 1))); });
    pop();
}

function keyPressed() {
    // Switch case for key pressed event listeners.
    switch (key) {
        case 'c':
            createCanvas(window.innerWidth, window.innerHeight);
            break;
    }
}

function mouseClicked() { }
