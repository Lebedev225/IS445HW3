/* HW3
    Example 1 JavaScript code
*/

const userName = prompt("Enter your name: ")
const unitsCompleted = prompt("Enter the number of units completed: ")

if (unitsCompleted >= 0) {
    if (unitsCompleted > 91) {
        alert(`Hello ${userName}\nYour grade standing is Senior`)

    }

    else if (unitsCompleted >=61) {
        alert(`Hello ${userName}\nYour grade standing is Junior`)

    }

    else if (unitsCompleted >=31) {
        alert(`Hello ${userName}\nYour grade standing is Sophomore`)

    }

    else {
        alert(`Hello ${userName}\nYour grade standing is Freshman`)

    }
}

else {
    alert("Invalid input, please use numbers >= 0")

}