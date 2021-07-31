var x = 1
function subAdd() {
    x++;
    // Adding Dropdown menu for Grades and Textbox for Credits

    // Dropdown Menu
    document.getElementById('Subjects').innerHTML += "<lable for='G" + x + "'> Enter Grade for Subject " + x +
        "</lable>" +
        "<select id='G" + x + "' class='grade'>" +
        "<option value='10'>S</option>" +
        "<option value='9'>A</option>" +
        "<option value='8'>B</option>" +
        "<option value='7'>C</option>" +
        "<option value='6'>D</option>" +
        "<option value='5'>E</option>" +
        "</select> <br> "
        +
        // Textbox for Credit
        "<lable for='C" + x + "'> Enter Credits for Subject " + x +
        "</lable> <input type='number' value='' id='C" + x + "' class='credits'><br>";
}


var gra = [];
var cre = [];
var multiplication = [];
var sum = 0;
var sum2 = 0;
function Result() {
    for (var i = 0; i < x; i++) {
        gra[i] = document.getElementsByClassName("grade")[i].value;
    }
    for (var i = 0; i < x; i++) {
        cre[i] = document.getElementsByClassName("credits")[i].value;
    }
    for (var i = 0; i < x; i++) {
        multiplication[i] = parseFloat(gra[i]) * parseFloat(cre[i]);
    }
    for (var i = 0; i < x; i++) {
        sum += multiplication[i];
    }
    for (var i = 0; i < x; i++) {
        sum2 += parseFloat(cre[i]);
    }
    // alert("Your GPA is " + (sum / sum2).toFixed(2));
    document.getElementById("final").innerHTML += "<h3> Your GPA is " + (sum / sum2).toFixed(2) + " </h3>";
}
