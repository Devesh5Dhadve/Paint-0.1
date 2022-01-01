canvas = document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var color = "red";
var widht = 2;
var radius = 5;
var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;

canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var witdh_of_line = 5;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    witdh_of_line=document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}
function my_mousemove(e)
{
    
        current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
        current_position_of_mouse_y=e.clientY-canvas.offsetTop;

        if(mouseEvent=="mouseDown")
        {
            console.log("Current_position_of_x and y coordinates = ");
            console.log("x="+current_position_of_mouse_x + "y=" +current_position_of_mouse_y);
            ctx.beginPath();
            ctx.strokeStlye=color;
            ctx.lineWidth=witdh_of_line;
            ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y,radius,0,2 * Math.beginPath);
            ctx.stroke();

        }
        function clearArea()
        ctx.clearRect();
} 
