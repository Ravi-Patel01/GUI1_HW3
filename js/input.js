//Ravi Patel ravi_patel1@student.uml.edu

function draw_table() {

    var table = document.createElement('table'); //create table

    table.setAttribute('id', 'info'); //set table id for traversal and extraction

    var arrHead = new Array();
    var x_y_input = document.getElementById("x_y_input"); //retrieve vals and place in vars
    var x_start = x_y_input.elements[0];
    var x_end = x_y_input.elements[1];
    var y_start = x_y_input.elements[2];
    var y_end = x_y_input.elements[3];
    //check if number
    if(isNaN(x_start.value) || isNaN(x_end.value) || isNaN(y_start.value) || isNaN(y_end.value)) {
        document.getElementById("demo").innerHTML = "<br>" + "must input a number!" + "</br>"
        return
    } else {
        document.getElementById("demo").innerHTML = "<br>" + "</br>"
    }
    //check if start is greater than end
    if(x_start.value > x_end.value || y_start.value > y_end.value){
        document.getElementById("demo").innerHTML = "<br>" + "starting values must be less than ending values!" + "</br>"
        return
    } else {
        document.getElementById("demo").innerHTML = "<br>" + "</br>"
    }
    //check if out of acceptable tange of vals (-50 to 50)
    if(x_start.value < -50 || x_end.value > 50 || y_start.value < -50 || y_end.value > 50)  {
        document.getElementById("demo").innerHTML = "<br>" + "must input a value between -50 and 50" + "</br>"
        return
    } else {
        document.getElementById("demo").innerHTML = "<br>" + "</br>"
    }

    //creates table header with x start and end vals
    arrHead = [''];
    var j = 0;
    for(var i = x_start.value; i <= x_end.value; i++) {
        var temp = parseInt(x_start.value) + j;
        arrHead.push(temp);
        j++;
    }

    var arrValue = new Array();
    var tempArray = new Array();
    
    //fill each row and push onto larger list of rows
    for(var i = y_start.value; i <= y_end.value; i++){
        tempArray.push(i);
        for(var j = x_start.value; j <= x_end.value; j++) {
            tempArray.push(i * j);
        }
        arrValue.push(tempArray)
        tempArray = [];
    }

    var tr = table.insertRow(-1);
    //input header
    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }
    //input rows
    for (var c = 0; c <= arrValue.length - 1; c++) {
        tr = table.insertRow(-1);

        for (var j = 0; j < arrHead.length; j++) {
            var td = document.createElement('td');
            td = tr.insertCell(-1);
            td.innerHTML = arrValue[c][j];
        }
    }

    //replace placeholder table with created table
    document.getElementById("info").replaceWith(table);

}