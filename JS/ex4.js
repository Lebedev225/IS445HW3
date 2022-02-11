/* HW3
    Example 4 JavaScript code
*/
const truePassword = "secret"
let password = prompt("Enter your password: ")
let i = 1
while (password != truePassword && i != 3) {
    password = prompt("Try again: ")
    i++
}

if (password == truePassword) {
    console.log("You entered the correct password after " + i + " attempt(s)")

}

else  {
    console.log("Your account is locked!  You failed to enter the correct password " + i + " times")
}