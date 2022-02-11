/* HW3
    Example 6 JavaScript code
*/

let hr = Number(prompt("Enter hours: "))
let min = Number(prompt("Enter minutes: "))
let sec = Number(prompt("Enter seconds: "))

while (isNaN(hr) == true || isNaN(min) == true || isNaN(sec) == true || hr < 0 || hr >23 || min < 0 || min > 59 || sec < 0 || sec > 59) {
    alert("Invalid input, try again")
    hr = Number(prompt("Enter hours: "))
    min = Number(prompt("Enter minutes: "))
    sec = Number(prompt("Enter seconds: "))
}

let original = `Time input: ${hr}h ${min}m ${sec}s`
if (sec != 59) {
    sec++
}

else {
    sec = 0
    if (min != 59) {
        min++
    }

    else {
        min = 0
        if (hr != 23) {
            hr++
        }
        else {
            hr = 0
        }
    }    
}

console.log(`${original}\nOne second later: ${hr}h ${min}m ${sec}s`)