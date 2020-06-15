// function attachCheckboxHandlers() {
//     // get reference to element containing toppings checkboxes
//     var el = document.getElementById('add');

//     // get reference to input elements in toppings container element
//     var tops = el.getElementsByTagName('input');

//     // assign updateTotal function to onclick property of each checkbox
//     for (var i = 0, len = tops.length; i < len; i++) {
//         if (tops[i].type === 'radio') {
//             tops[i].onclick = updateTotal;
//         }
//     }
// }

// // called onclick of toppings checkboxes
// function updateTotal(e) {
//     // 'this' is reference to checkbox clicked on
//     var form = this.form;

//     // get current value in total text box, using parseFloat since it is a string
//     var val = parseFloat(form.elements['total'].value);

//     // if check box is checked, add its value to val, otherwise subtract it
//     if (this.checked) {
//         val += parseFloat(this.value);
//     } else {
//         val -= parseFloat(this.value);
//     }

//     // format val with correct number of decimal places
//     // and use it to update value of total text box
//     form.elements['total'].value = formatDecimal(val);
// }

// // format val to n number of decimal places
// // modified version of Danny Goodman's (JS Bible)
// function formatDecimal(val, n) {
//     n = n || 2;
//     var str = "" + Math.round(parseFloat(val) * Math.pow(10, n));
//     while (str.length <= n) {
//         str = "0" + str;
//     }
//     var pt = str.length - n;
//     return str.slice(0, pt) + "." + str.slice(pt);
// }

// // in script segment below form
// attachCheckboxHandlers();


// var ddm1 = document.getElementById("ddm1");
// var ddm2 = document.getElementById("ddm2");
// var ddm3 = document.getElementById("ddm3");
// var ddm4 = document.getElementById("ddm4");
// var ddm5 = document.getElementById("ddm5");
// var ddm6 = document.getElementById("ddm6");
// var ddm7 = document.getElementById("ddm7");

// if (ddm1.)

var agePoint = 0,
    Ela = 0,
    skillout = 0,
    skillin = 0,
    Eq = 0,
    Asr = 0,
    Pf = 0,
    Of = 0,
    Ns = 0;
var totalPoint = agePoint + Ela + skillout + skillin + Eq + Asr + Pf + Of + Ns;


function ddlselect() {

    // var d = document.getElementById("ddselect");
    // var displaytext = d.options[d.selectedIndex].value;
    // document.getElementById("txtvalue").value = displaytext;
    if (document.getElementById("above_18").selected) {
        agePoint = 20;
        // totalPoint = agePoint + totalPoint;

    } else if (document.getElementById("above_25").selected) {
        agePoint = 30;
    } else if (document.getElementById("above_33").selected) {
        agePoint = 25;
    } else if (document.getElementById("above_40").selected) {
        agePoint = 20;
    } else if (document.getElementById("above_45").selected) {
        agePoint = 15;
    } else if (document.getElementById("above_55").selected) {
        agePoint = 0;
    } else {
        agePoint = 0;
    }
    updatePoint();


}

function lan() {
    if (document.getElementById("lan1").checked) {
        Ela = 5;
    } else if (document.getElementById("lan2").checked) {
        Ela = 10;
    } else {
        Ela = 15;
    }
    updatePoint();
}

function skill() {
    if (document.getElementById("skillout1").checked) {
        skillout = 5;
    } else if (document.getElementById("skillout2").checked) {
        skillout = 10;
    } else {
        skillout = 30;
    }


    updatePoint();
}

function skillIn() {
    if (document.getElementById("skillin1").checked) {
        skillin = 5;
    } else if (document.getElementById("skillin2").checked) {
        skillin = 10;

    } else if (document.getElementById("skillin3").checked) {
        skillin = 15;
    } else {
        skillin = 0;
    }
    updatePoint();
}

function eq() {
    if (document.getElementById("eq1").checked) {
        Eq = 5;

    } else if (document.getElementById("eq2").checked) {
        Eq = 10;
    } else {
        Eq = 20;
    }
    updatePoint();
}

function asr() {
    if (document.getElementById("Asr1").checked) {
        Asr = 5;
    } else if (document.getElementById("Asr2").checked) {
        Asr = 5;
    } else {
        Asr = 5;
    }
    updatePoint();
}

function pf() {
    if (document.getElementById("Pf1").checked) {
        Pf = 10;
    } else if (document.getElementById("Pf2").checked) {
        Pf = 10;
    } else if (document.getElementById("Pf3").checked) {
        Pf = 5;
    } else {
        Pf = 10;
    }
    updatePoint();
}

function of() {

    if (document.getElementById("Of1").checked) {
        Of = 5;
    } else {
        Of = 10;
    }
    updatePoint();
}

function ns() {
    if (document.getElementById("Ns1").checked) {
        Ns = 5;
    } else {
        Ns = 10;
    }
    updatePoint();
}


// function lan(val) {
//     var lan1 = document.getElementById("lan1");
//     var lan2 = document.getElementById("lan2");
//     var lan3 = document.getElementById("lan3");
//     var a = 0;




//     if (lan1.checked == true) {
//         a = lan1.value;

//         var total
//     } else if (lan2.checked == true) {
//         a = lan2.value;
//         alert(" the lan2 buttom is clicked " + lan2.value);
//     } else if (lan3.checked == true) {
//         a = lan3.value;
//         alert(" a value is " + a)
//     } else {

//     }
//     var tot = 0;
//     var tot = val + a;

//     alert(" total value is " + tot);


// }


// function ageChanged() {
//     if (document.getElementById("24").checked) {
//         agePoint = 5;
//     } else if (document.getElementById("30").checked) {
//         agePoint = 10;
//     } else {
//         agePoint = 0;
//     }
//     updatePoint();
// }

// function visaChanged() {
//     if (document.getElementById("student").checked) {
//         visaPoint = 5;
//     } else if (document.getElementById("PR").checked) {
//         visaPoint = 10;
//     } else if (document.getElementById("Citizen").checked) {
//         visaPoint = 15;
//     } else {
//         agePoint = 0;
//     }
//     updatePoint();
// }

function updatePoint() {
    totalPoint = agePoint + Ela + skillout + skillin + Eq + Asr + Pf + Of + Ns;
    document.getElementById("txtvalue").innerHTML = totalPoint;
}


// document.getElementById("s").onclick = funciton() {

//     var niraj = 5;
//     total = niraj + total;
//     alert(" your total value is :" + total);
// }