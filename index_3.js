//Color Mixer...

function mixColors(color1, color2) {
    let resultColor;

    // Using a switch statement to determine resulting color based on the combination of colors
    switch (color1) {
        case 'red':
            if (color2 === 'blue' || color2 === '#blue') {
                resultColor = 'purple';
            } else if (color2 === 'yellow') {
                resultColor = 'orange';
            } else {
                resultColor = 'Invalid color combination';
            }
            break;
        case 'blue':
        case '#blue':
            if (color2 === 'red') {
                resultColor = 'purple';
            } else if (color2 === 'yellow') {
                resultColor = 'green';
            } else {
                resultColor = 'Invalid color combination';
            }
            break;
        case 'yellow':
            if (color2 === 'red') {
                resultColor = 'orange';
            } else if (color2 === 'blue' || color2 === '#blue') {
                resultColor = 'green';
            } else {
                resultColor = 'Invalid color combination';
            }
            break;
        default:
            resultColor = 'Invalid color combination';
    }

    // Print the resulting color
    console.log("Resulting color:", resultColor);
}
