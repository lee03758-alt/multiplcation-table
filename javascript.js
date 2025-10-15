function getRowsDesired() {
    return parseInt(document.getElementById("rows").value)
}

function getColumnsDesired() {
    return parseInt(document.getElementById("cols").value)
}

function createWithFlexbox(rows,col) {
    let string =''

    let row=1
    do{
        string += "<div class='rows'>"
        string += row

        let cols = 1
        do{
            string += "<div class='cols'>"
            string += row * cols
            string += "</div>"

            col = col + 1

        } while(col <= cols);
        string += "</div>\n"

        row = row + 1;
    }while (row <= rows);

    document.getElementById('output').innerHTML = string
}

