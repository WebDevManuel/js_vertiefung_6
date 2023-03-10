//lev1_1: length
let firstName = "Manuscript";
let lastName = "Str_F";
let fullName = firstName + lastName;
console.log(`firstName.length: ${firstName.length}`);
console.log(`lastName.length: ${lastName.length}`);
console.log(`fullName.length: ${fullName.length}`);

//lev1_2: indexOf 
const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";
console.log("h " + txt.indexOf("h"));
console.log("Earth " + txt.indexOf("Earth"));
console.log("Moon " + txt.indexOf("Moon"));

//lev1_4: slice
const A = "Susi is going to codingschool";
let slice1 = A.slice(0, 5);
let slice2 = A.slice(5, 7);
let slice3 = A.slice(5, 17).concat(A.slice(23, 29));
let slice4 = A.slice(23, 29);
let slice5 = A.slice(0, 8).concat(A.slice(23, 29));
document.write(slice1 + '<br>');
document.write(slice2 + '<br>');
document.write(slice3 + '<br>');
document.write(slice4 + '<br>');
document.write(slice5 + '<br>');

//lev1_5: substring
const text = 'Susi is back from codingschool';
let sString1 = text.substring(0, 5);
let sString2 = text.substring(5, 7);
let sString4 = text.substring(24, 30);
let sString5 = text.substring(0, 8).concat(text.substring(24, 30));;
document.write(sString1 + '<br>');
document.write(sString2 + '<br>');
document.write(sString4 + '<br>');
document.write(sString5 + '<br>');

//lev1_7: replace
const text = "Sam is good at codingschool";
let replace1 = (text.replace("good", "bad"));
let replace2 = (text.replace("Sam", "Susi"));
let replace3 = (text.replace("codingschool", "tennis"));
document.write(replace1 + '<br>');
document.write(replace2 + '<br>');
document.write(replace3 + '<br>');

//lev1_8: toLowerCase-toUpperCase
const text = "Sam is going to codingschool";
let tuc1 = (text.toUpperCase());
let tlc1 = (text.toLowerCase());
let tuc2 = (text.slice(0, 3).toUpperCase().concat(text.slice(3, 16)).concat(text.slice(22, 28).toUpperCase()));
let tlc2 = (text.slice(0, 3).toLowerCase().concat(text.slice(3, 16).toUpperCase()).concat(text.slice(22, 28).toLowerCase()));
let tucTlc = (text.slice(0, 4).concat(text.slice(4, 5).toUpperCase()).concat(text.slice(5, 7)).concat(text.slice(7, 8).toUpperCase()).concat(text.slice(8, 13)).concat(text.slice(13, 14).toUpperCase()).concat(text.slice(14, 16)).concat(text.slice(22, 23).toUpperCase()).concat(text.slice(23, 28)));
document.write(tuc1 + '<br>');
document.write(tlc1 + '<br>');
document.write(tuc2 + '<br>');
document.write(tlc2 + '<br>');
document.write(tucTlc + '<br>');

//lev1_9: concat
const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "and";
const text4 = "to movie theater"
document.write(text1.concat(` ${text3} ${text4}`) + '<br>');
document.write(text1.replace("codingschool", text4) + '<br>');
document.write(`${text2} ${text3} ${text1.replace("is", "are").slice(0, 17).concat(text1.slice(22))}` + '<br>');
document.write(`${text2} ${text3} ${text1.replace("is", "are").replace("codingschool", "gym")} ${text3} ${text4}` + '<br>');
document.write(`${text1.replace("Sam", text2).slice(0, 17).concat(text1.slice(22))} ${text3} ${text4}`);

//lev1_1: Ternary Operator
function checkAge() {
    let age = document.querySelector("input[type=number]").value;
    age > 18 ? document.querySelector(".ageResult").innerHTML = "Du darfst rein!" : document.querySelector(".ageResult").innerHTML = "Du bleibst besser draußen!";
    console.log(age);
}

//lev1_2: Ternary Operator
function checkPw() {
    let pw = document.querySelector("input[type=password]").value;
    pw.length > 7 ? document.querySelector(".pwResult").innerHTML = '<span style="color: green;">Welcome 2 Da (Concred-)Jungle!</span>' : document.querySelector(".pwResult").innerHTML = '<span style="color: red;">Your Pw Is 2 Short!</span>';
}

//lev2_5: Switch Break
function check() {
    let bl = document.querySelector("input[type=text]").value;
    console.log(bl);
    switch (bl) {
        case "Berlin":
            document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Bremen":
            document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hessen":
            document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        default: document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Existiert gar nicht ODER ist noch nicht eingepflegt. Es gibt nur Berlin, Bremen und Hessen.";
            break;
    }
}

//lev2_7: Switch Break DHL
function showtxt() {
    let optionValue = document.querySelector("select[name=mylist]").value;
    console.log(optionValue);

    switch (optionValue) {
        case "0":
            document.querySelector("#masse").innerHTML = "<b>Brief und Postkarte</b> <br>L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
            break;
        case "1":
            document.querySelector("#masse").innerHTML = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";
            break;
        case "2":
            document.querySelector("#masse").innerHTML = "<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm";
            break;
        case "3":
            document.querySelector("#masse").innerHTML = "<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm";
            break;
        default:
            document.querySelector("#masse").innerHTML = "<b>Extra große Größe</b>";
            break;
    }
}
