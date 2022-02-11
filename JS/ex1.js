/* HW3
    Example 1 JavaScript code
*/
let i = 1;

if ((1 > 2) && i++) {
   //Nothing.  Want to test condition
}

console.log(`The value of i is: ${i}`);

const userName = prompt("Enter your name: ")
const unitsCompleted = prompt("Enter the number of units completed: ")

if (unitsCompleted >= 0) {
    if (unitsCompleted > 91) {
        console.log(`Hello ${userName}\nYour grade standing is Senior`)

    }

    else if (unitsCompleted >=61) {
        console.log(`Hello ${userName}\nYour grade standing is Junior`)

    }

    else if (unitsCompleted >=31) {
        console.log(`Hello ${userName}\nYour grade standing is Sophomore`)

    }

    else {
        console.log(`Hello ${userName}\nYour grade standing is Freshman`)

    }
}

else {
    console.log("Invalid input, please use numbers >= 0")

}