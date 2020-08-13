
window.onload = function() {
	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	var centerY = height * .5,
        centerX = width * .5,
        radius = 200,
        angle = 0,
        vec = Vec2.Create(0,0),
        point = Vec2.Create(0,0);

    //ctx.scale(1, -1);
    vec.SetLength(radius);
    
        
    var stop = false;
    var frameCount = 0;
    var results = ("#results");
    var fps, fpsInterval, startTime, now, then, elapsed;

    fps = 30;
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    render();
	function render() {
        
        now = Date.now();
        elapsed = now - then;

        // if enough time has elapsed, draw the next frame

        if (elapsed > fpsInterval) {

            // Get ready for next frame by setting then=now, but also adjust for your
            // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
            then = now - (elapsed % fpsInterval);

            // Put your drawing code here
            ctx.clearRect(0, 0, width, height);
        
            vec.SetAngle(angle *0.0174532925);
            //console.log(vec.GetX(), vec.GetY());
            point.SetX(centerX + vec.GetX());
            point.SetY(centerY + vec.GetY());


        

            
            ctx.beginPath();

            ctx.save();
            ctx.moveTo(0, centerY);
            ctx.lineTo(width, centerY);
            ctx.moveTo(centerX, 0);
            ctx.lineTo(centerX, height);
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
            ctx.restore();

            ctx.moveTo(centerX, centerY);
            ctx.lineTo(point.GetX(), point.GetY());
            ctx.moveTo(point.GetX(), point.GetY());
            ctx.lineTo(point.GetX(), centerY);
            ctx.stroke();
            

            
            

            angle -= 1;
            if(angle >= 360)
                angle = 0;
            console.log("Angle is: " + angle);
            
            
            
        }

        requestAnimationFrame(render);
    }
    
    

    
};

