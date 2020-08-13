var Particle = {
    position: null,
    velocity: null,
    gravity: null,

    Create: function(x, y, speed, direction, grav){
        var obj = Object.create(this);
        obj.position = Vec2.Create(x, y);
        obj.velocity = Vec2.Create(0, 0);
        obj.velocity.SetLength(speed);
        obj.velocity.SetAngle(direction);
        obj.gravity = Vec2.Create(0, grav || 0);
        return obj;
    },

    accelerate : function(accel){
        this.velocity.AddTo(accel);
    },

    Update: function(){
        this.position.AddTo(this.velocity);
    },

};