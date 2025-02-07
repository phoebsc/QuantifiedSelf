const basic = `
// This code only runs once and sets up your project
p.setup = () => {
    // This line is important so that it takes up the size of your window.
    p.createCanvas(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight);
}

// Code that is constantly being updated
p.draw = () => {
    // Sets your background color to black using RGB values
    // The values go from a range between 0 and 255 (8-bit color)
    p.background(0, 0, 0);

    // Sets the color of the circle using also RGB
    p.fill(255, 255, 255);

    // Declare your size variable that is based on your size parameter
    // All parameters go between 0 and 1, so you need to scale them as desired.
    var size = p.map(value.current["Size"], 0, 1, 0, 200);
    p.circle(p.width/2, p.height/2, size);
}
`

export default basic;