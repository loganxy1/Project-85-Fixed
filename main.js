canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "https://www.hotrod.com/uploads/sites/21/2019/01/001-bottom-end-1970-dodge-challenger-rt-panther-pink-fm3.jpg?fit=around%7C875:492"
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://www.automobilemag.com/uploads/sites/11/2017/08/McLaren_FUX_720s_050.jpg?fit=around%7C875:492"
car2_x = 10;
car2_y = 100;

background_image = "https://i2.cdn.turner.com/money/2010/02/08/autos/dodge_challenger_furious_fuschia/challenger_fuscia.top.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        console.log("up arrow key");
        car1_up();
    }

    if(keyPressed == '40'){
        console.log("down arrow key");
        car1_down();
    }

    if(keyPressed == '37'){
        console.log("left arrow key");
        car1_left();
    }

    if(keyPressed == '39'){
        console.log("right arrow key");
        car1_right();
    }


    if(keyPressed == '87'){
        console.log("w key");
        car2_up();
    }

    if(keyPressed == '83'){
        console.log("s key");
        car2_down();
    }

    if(keyPressed == '68'){
        console.log("d key");
        car2_right();
    }

    if(keyPressed == '65'){
        console.log("a key");
        car2_left();
    }

function car1_up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = "+ car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down(){
    if(car1_y <= 500){
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = "+ car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left(){
    if(car1_x >= 0){
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = "+ car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
    if(car1_x <= 700){
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = "+ car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function car2_up(){
    if(car2_y >= 0){
        car2_y = car2_y - 10;
        console.log("When W key is pressed, x = "+ car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down(){
    if(car2_y <= 500){
        car2_y = car2_y + 10;
        console.log("When S key is pressed, x = "+ car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left(){
    if(car2_x >= 0){
        car2_x = car2_x - 10;
        console.log("When A key is pressed, x = "+ car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right(){
    if(car2_x <= 700){
        car2_x = car2_x + 10;
        console.log("When D key is pressed, x = "+ car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

if(car1_x > 700){
    console.log("car1 Won");
    document.getElementById('game_status').innerHTML = "Car 1 Won!!";
}

if(car2_x > 700){
    console.log("car2 Won");
    document.getElementById('game_status').innerHTML = "Car 2 Won!!";
}

}