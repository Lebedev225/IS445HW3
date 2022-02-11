/* HW3
    Example 2 JavaScript code
*/
const dayEntered = prompt("Enter the day of the week as three first undercase letters: ")

switch (true) {
  case (dayEntered === "sun"):
    console.log(`You entered ${dayEntered}\nThe following day is: Monday`)
    break;
  case (dayEntered === "mon"):
    console.log(`You entered ${dayEntered}\nThe following day is: Tuesday`)
    break;
  case (dayEntered === "tue"):
    console.log(`You entered ${dayEntered}\nThe following day is: Wednesday`)
    break;
  case (dayEntered === "wed"):
    console.log(`You entered ${dayEntered}\nThe following day is: Thursday`)
    break;
  case (dayEntered === "thu"):
    console.log(`You entered ${dayEntered}\nThe following day is: Friday`)
    break;
  case (dayEntered === "fri"):
    console.log(`You entered ${dayEntered}\nThe following day is: Saturday`)
    break;
  case (dayEntered === "sat"):
    console.log(`You entered ${dayEntered}\nThe following day is: Sunday`)
    break;
  default:
    console.log("You did not enter a valid day of the week")
}