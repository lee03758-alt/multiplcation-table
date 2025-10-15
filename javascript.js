//
//
//
// console.log("here/'s for loop showing 1...10:/n")
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}/n`)
// }
//
// console.log("here/'s for loop showing 1...10:/n")
// let i = 0
// do {
//     console.log(i + `/n`)
//     i++
// } while (i < 10)
//
// console.log("here/'s for loop showing 1...10:/n")
// let j =0
// while (i < 10){
//     console.log(`${j}/n`)
//     j++
// }
// console.log("here/'s a foreach loop interacting over an array showing 1...10:/n")
// let nums  = [...Array(10).keys()]
// nums.forEach(num => {
//     console.log(`${num}/n`)
// })
//
// console.log('Here\'s a multiplication table method rendered in the console with a far loop:\n!')
//
// let timesTable = (to) => {
//     if (Number.isInteger(to)) {
//         // rows iterator
//         for (let i = 1; i <= to; i++) {
//             let row = ""
//             //columns iterator
//             for (let j = 1; j <= to; j++) {
//                 row += `${ i * j }\t`
//             }
//             console.log(row)
//         }
//     } else {
//         console.log(`Sorry, ${to} isn't a number!`)
//     }
// }
//
// timesTable(4)

// function getRowsDesired() {
//     return Number(document.getElementById("rows").value)
// }
//
// function getColumnsDesired() {
//     return Number(document.getElementById("cols").value)
// }
//
// function getHighlightValue() {
//     let highlightValue = document.getElementById("highlight").value
//
//     if (highlightValue !== '') {
//         return Number(highlightValue)
//     }
// }
//
//
// function createWithHtmlTable(rows, cols, highlight) { // method declaration, has two parameters
//     let string // define a variable called string
//     if (rows && cols) { // if rows and columns were provided
//         string = "<table>\n" // start building the HTML table
//
//         // first "for" loop to build the rows of the table
//         for (let row = 1; row <= rows; row++) {
//
//             if (highlight && highlight === row) {
//                 // if highlight "IS TRUTHY" and its value matches the row
//                 // we're on, then do this next
//                 string += "<tr class='highlight'>\n"
//             } else {
//                 // otherwise just start a regular HTML row with no class
//                 string += "<tr>\n" // start building an HTML row
//             }
//
//             // second "for" loop to build the columns of EACH row
//             for (let col = 1; col <= cols; col++) {
//
//                 if (highlight && highlight === col) {
//                     string += "<td class='highlight'>\n"
//                 } else {
//                     string += "<td>" // start building a single "cell" or column in the HTML row
//                 }
//
//
//                 string += row * col // populate the contents of the HTML cell
//                 string += "</td>\n" // complete the HTML cell
//             }
//             string += "</tr>\n" // complete the HTML row
//         }
//
//         string += "</table>\n" // complete the HTML table
//     } else { // I guess the method wasn't provided either rows or columns
//         string = 'Provide some inputs' // set value of "string" variable to "Provide some inputs"
//     }
//
//     document.querySelector("section.container > section#output").innerHTML = string
//     // document.getElementById("output").innerHTML = string; // WRITE the string we've just built to an element
//     // in the HTML document whose ID is "output"
// }
function getRowsDesired() {
    return Number(document.getElementById("rows").value);
}

function getColumnsDesired() {
    return Number(document.getElementById("cols").value);
}

function getHighlightValue() {
    let highlightValue = document.getElementById("highlight").value;
    if (highlightValue !== '') {
        return Number(highlightValue);
    }
}

function createWithHtmlTable(rows, cols, highlight) {
    let string;
    if (rows && cols) {
        string = "<table>\n";
        for (let row = 1; row <= rows; row++) {
            if (highlight && highlight === row) {
                string += "<tr class='highlight'>\n";
            } else {
                string += "<tr>\n";
            }

            for (let col = 1; col <= cols; col++) {
                if (highlight && highlight === col) {
                    string += "<td class='highlight'>";
                } else {
                    string += "<td>";
                }

                string += row * col;
                string += "</td>\n";
            }
            string += "</tr>\n";
        }
        string += "</table>\n";
    } else {
        string = 'Provide some inputs';
    }

    document.querySelector("section.container > section#output").innerHTML = string;
}
