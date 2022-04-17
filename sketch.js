//Topic 1.1 
//Object orientation revisted
//part one



var flying_saucer;

function setup()
{
    createCanvas(800,600);
    noStroke();


    flying_saucer = {
        x: 400,
        y: 150,
        width: 200,
        height: 50,
        window_width: 0.75,
        window_height: 0.85,
        base_height: 0.45,
        num_lights:20,
        brightnesses: [],
        beam_on: false,
        
        hover: function()
        {
            this.x += random(-2,2);
            this.y += random(-1,1);
            
        },

        light_up: function()
        {

            var incr = this.width/(this.num_lights -1);

            for(var i = 0; i < this.num_lights; i++)
            {
                fill(this.brightnesses[i])
               ellipse(this.x - this.width/2 + incr * i,
                 this.y,
                  5);
                  this.brightnesses[i] += 5;
                  this.brightnesses[i] = this.brightnesses[i]%255;
            }
        },

        beam :function()
        {
          fill(255,255,0,150);
          if(random() > 0.1)
          {
          beginShape();
          vertex(this.x - this.width * 0.25, this.y);
          vertex(this.x + this.width * 0.25, this.y);
          vertex(this.x + this.width * 0.35, height - 100);
          vertex(this.x - this.width * 0.35, height - 100);
          endShape(CLOSE);
        
          }
        }
    }

    for (var i = 0; i < flying_saucer.num_lights; i++)
    {
        flying_saucer.brightnesses.push((i * 10)%255);
    }
} 


function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    if (flying_saucer.beam_on == true){
        flying_saucer.beam();
    }

    
    //draw the flying saucer
    fill(175,238,238);
    arc(flying_saucer.x,flying_saucer.y,flying_saucer.width/2,flying_saucer.height*2,PI,TWO_PI)
    fill(150);
    arc(flying_saucer.x,flying_saucer.y,flying_saucer.width,flying_saucer.height,PI,TWO_PI);
    fill(50);
    arc(flying_saucer.x,flying_saucer.y,flying_saucer.width,flying_saucer.height/2,0,PI);
    
     flying_saucer.hover();
    flying_saucer.light_up();
  


}

function keyPressed()
{
    flying_saucer.beam_on = true;

}


function keyReleased()
{

    flying_saucer.beam_on= false;
}