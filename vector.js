var Vec2 = {
    x: 0,
    y: 0,

    Create: function(x, y){
        var obj = Object.create(this);
        obj.SetX(x);
        obj.SetY(y);
        return obj;
    },

    GetX: function(){
        return this.x;
    },

    GetY: function(){
        return this.y;
    },

    SetX: function(x){
        this.x = x;
    },

    SetY: function(y){
        this.y = y;
    },

    SetAngle: function(angle){
        var len = this.GetLength();
        this.x = Math.cos(angle) * len;
        this.y = Math.sin(angle) * len;
    },

    GetAngle: function(){
        return Math.atan2(this.y, this.x);
    },

    GetLength: function(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    },

    SetLength: function(length){
        var angle = this.GetAngle();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;

    },

    Add: function(vec){
        return this.Create(this.x + vec.GetX(), this.y + vec.GetY()); 
    },

    Substruct: function(vec){
        return this.Create(this.x - vec.GetX(), this.y - vec.GetY()); 
    },

    Multiply: function(val){
        return this.Create(this.x * val, this.y * val); 
    },

    Divade: function(val){
        return this.Create(this.x / val, this.y / val); 
    },
    
    AddTo: function(vec){
        this.x += vec.GetX();
        this.y += vec.GetY();

    },

    SubstructFrom: function(vec){
        this.x -= vec.GetX();
        this.y -= vec.GetY();

    },

    MultiplyBy: function(vec){
        this.x *= vec.GetX();
        this.y *= vec.GetY();

    },

    DivadeBy: function(vec){
        this.x /= vec.GetX();
        this.y /= vec.GetY();

    },

};


