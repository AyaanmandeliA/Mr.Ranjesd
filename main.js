var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_img(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        blockimg_object = Img;
        blockimg_object.scaleToWidth(block_image_width);
        blockimg_object.scaleToHeight(block_image_height);
        blockimg_object.set({
            top: block_y,
            left: block_x
        });
        canvas.add(blockimg_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_img('rr1.png')
        console.log(" r is pressed")
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_img('gr.png')
        console.log("g is pressed")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_img('yr.png')
        console.log("y is pressed")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_img('pr.png')
        console.log("P is pressed")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_img('br.png')
        console.log("b is pressed")
	}
	
}

