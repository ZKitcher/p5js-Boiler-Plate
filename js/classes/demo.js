class Demo {
    constructor() {
        this.text = random([
            'Hello World',
            'Talk the Talk',
            'Love Birds',
            'Break The Ice',
            'Tough It Out',
            'Jig Is Up',
            'Hear, Hear',
            'A Cold Fish',
            'A Home Bird'
        ]);
        this.pos = createVector(random(50, width - 50), random(50, height - 50));;
        this.xspeed = 5;
        this.yspeed = 5;
    }

    run(){
        this.update();
        this.render();
    }

    update() {
        this.pos.x += this.xspeed;
        this.pos.y += this.yspeed;

        if (this.pos.x > width - 100 || this.pos.x < 100) {
            this.xspeed = -this.xspeed;
        }
        if (this.pos.y > height || this.pos.y < 30) {
            this.yspeed = -this.yspeed;
        }
    }

    render(){
        push()
        fill((this.pos.x / width) * 255, (this.pos.y / height * 255), 100);
        textAlign(CENTER);
        textSize(40)
        text(this.text, this.pos.x, this.pos.y)
        pop()
    }
}