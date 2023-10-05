// Get a reference to the canvas element and the body element
const canvas = document.getElementById("canvas");
const body = document.querySelector("body");

// Set the canvas dimensions to fill the entire window
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Initialize variables for color, line width, and drawing state
var theColor = '';
var lineW = 5;
let prevX = null;
let prevY = null;
let draw = false;

// Set the initial background color and configure input for changing it
body.style.backgroundColor = "#C0C0C0";
var theInput = document.getElementById("favcolor");

theInput.addEventListener("input", function () {
    // Update theColor and change the body's background color
    theColor = theInput.value;
    body.style.backgroundColor = theColor;
}, false);

// Get the 2D rendering context of the canvas and set the line width
const ctx = canvas.getContext("2d");
ctx.lineWidth = lineW;

// Configure input for changing the line width
document.getElementById("ageInputId").oninput = function () {
    // Reset the drawing state and update the line width
    draw = false;
    lineW = document.getElementById("ageInputId").value;
    document.getElementById("ageOutpuId").innerHTML = lineW;
    ctx.lineWidth = lineW;
};

// Set up event listeners for color selection
let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs)

clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        // Set the stroke color based on the clicked color element's data-clr attribute
        ctx.strokeStyle = clr.dataset.clr
    })
})

// Set up event listener to clear the canvas
let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

// Set up event listener to save the canvas as an image
let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    // Convert the canvas to a data URL and create a download link
    let data = canvas.toDataURL("image/png")
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch.png"
    a.click()
})

// Set up event listeners for mouse interaction
window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", (e) => {
    if (prevX == null || prevY == null || !draw) {
        // If not drawing or no previous point, update previous coordinates and return
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    // Draw a line from the previous point to the current point
    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})
