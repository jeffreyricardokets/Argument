
function paintWall(colorWall = "white", wallLocation = "east") {
    console.log("The " + wallLocation + " wall has been painted " + colorWall)
}
paintWall("orange", "north")
paintWall("grey", "south-east")
paintWall() //without any arugement the value of colorWall is undefined
//does the order of the arguments matter when calling the function? -> yes it does
paintWall("north", "orange") //what happens if you switch them in the function definition? then we get the console.log of
