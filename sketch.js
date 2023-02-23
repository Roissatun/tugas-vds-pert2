let j;
    function setup() {
     // put setup code here
     createCanvas(400,200);
    
     y = 100;
     j = 0;
    }
    function draw() {
     line (200,0,200,200)
     background(200,5);
     var y = 100 + 30 * Math.sin(PI/10*j)
     j+=1
     fill(0,128,0);
     ellipse(300, y, 20, 20);

     point(296,138)
     point(305,138)

     line(296,138,290,145)
     line(305,138,310,145)    
    
     fill(255,255,255)
     ellipse(100, 100, 20, 20)
     
    

}





   


