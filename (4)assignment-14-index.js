{
    console.log("Before assignment:");
    console.log("x:", x); // This will throw a ReferenceError: Cannot access 'x' before initialization

    let x = 10;

    console.log("After assignment:");
    console.log("x:", x); // This will print "x: 10"
}
