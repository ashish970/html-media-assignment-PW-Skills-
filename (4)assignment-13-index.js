{
    console.log("Before declaration:");
    console.log("x:", x); // This will print "undefined"
    console.log("y:", y); // This will throw a ReferenceError: y is not defined
    console.log("z:", z); // This will throw a ReferenceError: Cannot access 'z' before initialization

    let x = 10;
    var y = 20;
    const z = 30;

    console.log("After declaration:");
    console.log("x:", x); // This will print "x: 10"
    console.log("y:", y); // This will print "y: 20"
    console.log("z:", z); // This will print "z: 30"
}
