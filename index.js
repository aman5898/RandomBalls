// window.onload=function(){
console.log("Loaded");

var canvas = document.querySelector('canvas')

var context = canvas.getContext('2d');
var circlearr = []
var maxRadius=40;
var minRadius=5;

function reiszecanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
}

(function () {
    window.addEventListener('resize', () => {
        reiszecanvas();
    })
    reiszecanvas();
})();

var mouse={
    x:undefined,
    y:undefined
}

var colorArr=[
    "#26547C",
    "#EF476F",
    "#FFD166",
    "#7B2D26",
    "#F1AB86"
]

window.addEventListener('mousemove',function(event){
    console.log(event);
    mouse.x=event.x;
    mouse.y=event.y;

    console.log(mouse);
    
    
})

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius=radius;
    this.color=colorArr[Math.floor(Math.random()*colorArr.length)]
    this.draw = function () {
        // console.log("aman");
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // context.strokeStyle = 'rgba(0, 0, 0, 1)'
        // context.stroke();
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    this.update = function () {
        if ((this.x + this.radius) > window.innerWidth || (this.x - this.radius < 0)) {
            this.dx = -this.dx;
        }

        if ((this.y + this.radius) > window.innerHeight || (this.y - this.radius < 0)) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if((Math.abs(mouse.x-this.x)<50)&&(Math.abs(mouse.y-this.y)<50))
        {
            if(this.radius<maxRadius)
            {
                this.radius+=1
            }
            
        }else if(this.radius>this.minRadius)
        {
            this.radius--;
        }

        this.draw();
    }
}

for (var i = 0; i < 800; i++) {
    var x = Math.random() * (window.innerWidth - radius * 4);
    var y = Math.random() * (window.innerHeight - radius * 4);
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    var radius = ((Math.random()) * 5)+1;
    circlearr.push(new Circle(x, y, dx, dy, radius));
}

// var circle = new Circle(200, 200,3,3,30)
// console.log(circle);





// circle.draw();

context.stroke();

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // circle.update();
    // console.log("circle drawing");
    for (var i = 0; i < circlearr.length; i++) {
        circlearr[i].update();
    }
}

animate();







// }